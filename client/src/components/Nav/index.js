import React from "react";
import "./index.css";
// import Home from "../Home/index.js"

// import { LoginTest, Register } from "./components/LoginTest";
// // import Home from "./components/Home";
// import LoginTestShow from "./components/LoginTestShow";

function Nav() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="/">Binge Watch Club</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">Log In</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/register">Register</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/saved">My Shows</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Log Out</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Nav;