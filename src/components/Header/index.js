import React, { Component } from "react";
import "./Header.css";
import cooker from "../../assets/img/chefCook.png";

export default class index extends Component {
  render() {
    return (
      <div className="realHeader">
        <div className="logo">
          <h4>Foodies</h4>
        </div>

        <div className="chef">
          <img src={cooker} />
        </div>

        <div className="menu">
          <ul>
            <div className="navEl">
              <li>
                <a href="/">Accueil</a>
              </li>

              <li>
                <a href="/favorite">Favoris</a>
              </li>
            </div>
          </ul>  
        </div>
      </div>
    );
  }
}
