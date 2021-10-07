// * React imports
import React from "react";

// * Stylesheet import
import "./blockText.scss";

// * logos import
import githubLogo from "../../../Assets/Logos/github-logo.png";
import linkedinLogo from "../../../Assets/Logos/linkedin-logo.png";

export default function BlockText() {
  return (
    <div className="blockText">
      <p className="blockText__text">
        Rox's a <b>Full-Stack Web Developer</b> with a background in
        Communication Design and Art, recently graduated from a one-year
        Full-Stack Web Dev course in Remote Learning, eager to explore the
        realms of Web Applications and UX/UI Design.
      </p>
      <div className="logosBox">
        <a
          className="logo"
          href="https://github.com/xrfg"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubLogo} alt="github-logo" height="50px" />
        </a>
        <a
          className="logo"
          href="https://www.linkedin.com/in/rox-martins-654782214/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinLogo} alt="linkedin-logo" height="50px" />
        </a>
      </div>
    </div>
  );
}
