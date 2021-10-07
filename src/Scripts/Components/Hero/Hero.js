// * React imports
import React from "react";

// * Stylesheet imports
import "./hero.scss";

export default function Hero() {
  return (
    <div className="heroContainer">
      <div className="hero">
        <header className="hero__header">
          <h1 style={{ marginBottom: "0.4rem" }}>Rox Martins</h1>
          <h2>Full-Stack Web Developer</h2>

          <a
            href="https://www.linkedin.com/in/rox-martins-654782214/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hero__header-btn">Get in touch</button>
          </a>
        </header>
      </div>
    </div>
  );
}
