import React from "react";
import "./Sobre.css";

export default class Sobre extends React.Component {
  render() {
    return (
      <div>
        <div id="containerAbout">
          <div class="person">
            <div class="container">
              <div class="container-inner">
                <img
                  class="circle"
                  src="https://raw.githubusercontent.com/mthalmeida/agency/main/src/components/Images/circleMatheus.png"
                  alt="profile"
                />
                <img
                  class="img img1"
                  src="https://raw.githubusercontent.com/mthalmeida/agency/main/src/components/Images/profileMatheus.png"
                  alt="profile"
                />
              </div>
            </div>
            <div class="divider"></div>
            <div class="name">Matheus Almeida</div>
            <div class="title">Developer Senior</div>
          </div>

          <div class="person">
            <div class="container">
              <div class="container-inner">
                <img
                  class="circle"
                  src="https://raw.githubusercontent.com/mthalmeida/agency/main/src/components/Images/circleNathalia.png"
                  alt="profile"
                />
                <img
                  class="img img2"
                  src="https://raw.githubusercontent.com/mthalmeida/agency/main/src/components/Images/profileNathalia.png"
                  alt="profile"
                />
              </div>
            </div>
            <div class="divider"></div>
            <div class="name">Nathalia Mendonça</div>
            <div class="title">Product Owner</div>
          </div>
        </div>
      </div>
    );
  }
}
