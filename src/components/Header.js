import React, { Component } from "react";
import logo from "../img/logo.png";
import MainMenu from "./MainMenu";

import Hamb from "./Hamb";
export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo-wrapper">
          <img src={logo} alt="logo" />
        </div>

        <div
          className={
            (this.props.isSmallScreen || this.props.isMobile)
              ? "main-menu-wrapper hamb-wrapper"
              : "main-menu-wrapper"
          }
        >
          {(!this.props.isSmallScreen && !this.props.isMobile) && (
            <MainMenu
              showSubpage={this.props.showSubpage}
              activeSubpageIndex={this.props.activeSubpageIndex}
              mainMenu={this.props.mainMenu}
              isSmallScreen={this.props.isSmallScreen}
              isMobile={this.props.isMobile}
              handleMenu={this.props.handleMenu}
              activeIndex={this.props.activeIndex}
              handleCloseMenu={this.props.handleCloseMenu}
            />
          )}
          {  (this.props.isSmallScreen || this.props.isMobile) && (
            <Hamb
              isMenuOpen={this.props.isMenuOpen}
              handleOpenMenu={this.props.handleOpenMenu}
            />
          )}
          {(this.props.isSmallScreen || this.props.isMobile) && this.props.isMenuOpen && (
            <div className="hamb-menu-wrapper">
              <MainMenu
               isMobile={this.props.isMobile}
                showSubpage={this.props.showSubpage}
                activeSubpageIndex={this.props.activeSubpageIndex}
                mainMenu={this.props.mainMenu}
                isSmallScreen={this.props.isSmallScreen}
                handleMenu={this.props.handleMenu}
                activeIndex={this.props.activeIndex}
                handleCloseMenu={this.props.handleCloseMenu}
              />
            </div>
          )}
        </div>
      </header>
    );
  }
}
