// * React imports
import React from "react";
import { NavLink } from "react-router-dom";

// * Stylesheet import
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <nav className="navbar">
        <NavLink activeClassName="navbar__active-link" exact to="/">
          <h1 className="navbar__heading">💻 Rox Martins</h1>
        </NavLink>
        <ul>
          <li>
            <NavLink
              activeClassName="navbar__active-link"
              className="navbar__link"
              exact
              to="/links"
            >
              <span>🔗 Links</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="navbar__active-link"
              className="navbar__link"
              exact
              to="/contact"
            >
              📝 Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
