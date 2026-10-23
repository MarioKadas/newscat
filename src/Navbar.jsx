import { useEffect, useState } from "react";
import "./Navbar.css";

// How far (in pixels) the user must scroll before the navbar appears.
const SCROLL_THRESHOLD = 600;

export default function Navbar({
  rightLink = { label: "Contact", href: "#" },
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll(); // set the correct state on first render
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${visible ? "navbar--visible" : ""}`}
      aria-label="Main"
      aria-hidden={!visible}
    >
      
      <a className="navbar__link navbar__left" href="#" tabIndex={visible ? 0 : -1}>
        Newsfeed
      </a>

      <a className="navbar__brand" href="#" tabIndex={visible ? 0 : -1}>
        NewsCat
      </a>
   
      <ul>
        <a href="#"><img className="navbar-icons" src="./pics/icons/user.webp" alt="user"/></a>
        <a href="#"><img className="navbar-icons" src="./pics/icons/x.webp" alt="x"/></a>
        <a href="#"><img className="navbar-icons" src="./pics/icons/ig.webp" alt="instagram"/></a>
        <a href="#"><img className="navbar-icons" src="./pics/icons/fb.webp" alt="facebook"/></a>
        <a href="#"><img className="navbar-icons" src="./pics/icons/search.webp" alt="search"/></a>
      </ul>

    </nav>
  );
}