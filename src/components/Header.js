import React from "react";
import "./Header.css";
import "./Script.js";

export default class Header extends React.Component {
  render() {
    return (
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="Inicio">
            <img
              src="https://raw.githubusercontent.com/mthalmeida/agency/main/src/components/Images/logo-branca.png"
              alt="Logo"
              width="3000"
              height="2400"
              class="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
    );
  }
}
