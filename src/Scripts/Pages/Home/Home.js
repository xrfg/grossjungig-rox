// * React imports
import React from "react";

// * Stylesheet import
import "./home.scss";

// * Component imports
import Hero from "../../Components/Hero/Hero";
import BlockText from "../../Components/BlockText/BlockText";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="page">
        <div className="container">
          <BlockText />
        </div>
      </div>
    </div>
  );
}
