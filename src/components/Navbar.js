import React from "react";

export default function Navbar() {
  return (
    <nav>
      <img
        src={require("../images/reactlogo.png")}
        alt="react logo"
        className="nav-icon"
      />
      <h3 className="nav-heading">ReactFacts</h3>
      <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
  );
}

// export default navbar;
