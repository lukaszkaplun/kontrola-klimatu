import React, { Component } from "react";

import "normalize.css";
import "./style/style.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import youtube from "./img/youtube.svg";
import pinterest from "./img/pinterest.svg";
import instagram from "./img/instagram.svg";
import facebook from "./img/facebook.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainMenu: [
        { name: "home" },
        { name: "kim jesteśmy?" },
        { name: "nasza oferta" },
        { name: "certyfikaty" },
        { name: "galeria" },
        { name: "kontakt" }
      ],
      socialMenu: [
        { name: "youtube", icon: youtube, address: "" },
        { name: "pinterest", icon: pinterest, address: "" },
        { name: "instagram", icon: instagram, address: "" },
        { name: "facebook", icon: facebook, address: "" }
      ]
    };
  }
  render() {
    return (
      <div className="app-wrapper">
        <Header mainMenu={this.state.mainMenu} />
        <Footer socialMenu={this.state.socialMenu} />
      </div>
    );
  }
}

export default App;
