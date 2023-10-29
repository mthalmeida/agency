import React from "react";
import "./Header.css";
import "./Script.js";

export default class Header extends React.Component {
  render() {
    return (
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="./Images/logo-branca.png"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Bootstrap
          </a>
        </div>
      </nav>
    );
  }
}
