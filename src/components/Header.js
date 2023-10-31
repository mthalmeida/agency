import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    const navbarStyle = {
      backgroundColor: "#f1f7ef",
      padding: "5px",
      paddingBottom: "10px",
    };

    const menuItemStyle = {
      marginRight: "15px",
      fontSize: "18px",
    };

    return (
      <nav className="navbar fixed-top" style={navbarStyle}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#inicio">
            <img
              src="https://raw.githubusercontent.com/mthalmeida/agency/main/src/components/Images/texto-sem-fundo.png"
              alt="Logo"
              width="250"
              height="auto"
              className="align-text-top"
            />
          </a>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sobre"
                style={{
                  ...menuItemStyle,
                }}
              >
                Sobre
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#servicos"
                style={{
                  ...menuItemStyle,
                }}
              >
                Serviços
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#contato"
                style={{
                  ...menuItemStyle,
                }}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
