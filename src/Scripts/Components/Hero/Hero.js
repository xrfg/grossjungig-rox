//* React imports
import React from "react";
import { Link } from "react-router-dom";

// * Stylesheet imports
import "./hero.scss";

export default function Hero() {
  return (
    <div className="heroContainer">
      <div className="hero">
        <header className="hero__header">
          <h1 style={{ marginBottom: "0.4rem" }}>Rox Martins</h1>
          <h2>Full-Stack Web Developer</h2>
          <Link to="/contact">
            <button className="hero__header-btn">Get in touch</button>
          </Link>
        </header>
      </div>
    </div>
  );
}
