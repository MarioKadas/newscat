import Navbar from "./Navbar";
import Weather from "./Weather.jsx";
import Homepage from "./Homepage.jsx";

function App() {
  return ( 
  <>
    <Navbar />
    
    <div className="position-relative">

      <div className="min-vh-100 w-100">
        <Homepage />
      </div>

      <div className="position-absolute top-0 start-0" style={{ zIndex: 2 }}>
        <Weather />
      </div>
      
    </div>
  </>
);
}

export default App
