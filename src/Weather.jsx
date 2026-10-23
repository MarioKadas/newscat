import { useEffect, useState } from "react";
import "./Weather.css";

// WMO weather codes (used by Open-Meteo) -> emoji + label
function getWeatherInfo(code, isDay) {
  if (code === 0) return { emoji: isDay ? "☀️" : "🌙", label: "Clear sky" };
  if (code === 1) return { emoji: isDay ? "🌤️" : "🌙", label: "Mainly clear" };
  if (code === 2) return { emoji: "⛅", label: "Partly cloudy" };
  if (code === 3) return { emoji: "☁️", label: "Overcast" };
  if (code === 45 || code === 48) return { emoji: "🌫️", label: "Fog" };
  if (code >= 51 && code <= 57) return { emoji: "🌦️", label: "Drizzle" };
  if (code >= 61 && code <= 67) return { emoji: "🌧️", label: "Rain" };
  if (code >= 71 && code <= 77) return { emoji: "❄️", label: "Snow" };
  if (code >= 80 && code <= 82) return { emoji: "🌧️", label: "Rain showers" };
  if (code === 85 || code === 86) return { emoji: "🌨️", label: "Snow showers" };
  if (code >= 95) return { emoji: "⛈️", label: "Thunderstorm" };
  return { emoji: "🌡️", label: "Unknown" };
}

function getPosition() {
  return new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) {
      reject(new Error("Geolocation is not supported by this browser."));
      return;
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      timeout: 10000,
      maximumAge: 10 * 60 * 1000,
    });
  });
}

export default function Weather() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function load() {
      try {
        const { coords } = await getPosition();
        const { latitude, longitude } = coords;

        // Free APIs, no API key needed, CORS-enabled
        const [placeRes, weatherRes] = await Promise.all([
          fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
            { signal }
          ),
          fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,is_day`,
            { signal }
          ),
        ]);

        if (!placeRes.ok || !weatherRes.ok) {
          throw new Error("Could not load location or weather data.");
        }

        const place = await placeRes.json();
        const weather = await weatherRes.json();

        setData({
          city: place.city || place.locality || place.principalSubdivision || "Unknown location",
          temperature: Math.round(weather.current.temperature_2m),
          unit: weather.current_units.temperature_2m,
          ...getWeatherInfo(weather.current.weather_code, weather.current.is_day === 1),
        });
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(
          err.code === 1 // GeolocationPositionError.PERMISSION_DENIED
            ? "Location access was denied. Allow it in your browser settings and reload to see the weather."
            : err.message
        );
      }
    }

    load();
    return () => controller.abort();
  }, []);

  if (error) return <p className="weather weather--message" role="alert">{error}</p>;
  if (!data) return <p className="weather weather--message">Finding your location…</p>;

  return (
    <section className="weather" aria-label={`Weather in ${data.city}`}>
      <span className="weather__emoji" role="img" aria-label={data.label}>
        {data.emoji}
      </span>
      <div>
        <h2 className="weather__city">{data.city}</h2>
        <p className="weather__temp">
          {data.temperature}
          {data.unit}
        </p>
      </div>
    </section>
  );
}