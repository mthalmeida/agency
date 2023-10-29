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
              src="https://raw.githubusercontent.com/mthalmeida/agency/main/src/components/Images/texto-sem-fundo.png"
              alt="Logo"
              width="250"
              height="auto"
              class="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
    );
  }
}
