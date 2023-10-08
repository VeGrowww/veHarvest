import React from "react";
import "./NavBarStyles.css"; // Import the new CSS file

export default function NavBar() {
  return (
    <div className="navbar">
      <a className="navElements" href="#">
        Home
      </a>
      <a className="navElements" href="#">
        About
      </a>
      <a className="navElements" href="#">
        Services
      </a>
      <a className="navElements" href="#">
        Contact
      </a>
    </div>
  );
}
