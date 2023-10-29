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
              src="https://raw.githubusercontent.com/mthalmeida/agency/main/src/components/Images/logo-branca2.png"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
    );
  }
}
