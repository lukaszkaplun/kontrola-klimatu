import React, { Component } from 'react';
import logo from "../img/logo.png";
import MainMenu from './MainMenu';
export default class Header extends Component {
  render() {
    return (
    <header>
        <div className="logo-wrapper">
        <img src={logo} alt="logo"/>
        
        </div>
        <div className="main-menu-wrapper">
            <MainMenu mainMenu={this.props.mainMenu}/>
        </div>
    </header>
    );
  }
}


