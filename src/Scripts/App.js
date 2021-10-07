// * React imports
import { BrowserRouter } from "react-router-dom";

// * Stylesheet imports
import "./app.scss"; // ? works like a css reset

// * Component imports
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container" aria-label="page">
        <div className="content-wrap" aria-label="content-wrap">
          <Navbar />
          <Home />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
