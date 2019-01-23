import React, { Component } from "react";
// import scrollToElement from "scroll-to-element";

export default class MainMenu extends Component {
  render() {
    return (
      <ul className="main-menu">
        {this.props.mainMenu.map((item, index) => {
          if (item.submenu !== null) {
            return (
              <li
                onClick={this.props.handleOpenMenu}
                key={index}
                className={index === 0 ? "active" : ""}
              >
                <span>{item.name}</span>

                {/* <ul>
                  {item.submenu.map((subitem, subindex) => {
                    return (
                      <li
                        onClick={this.props.handleOpenMenu}
                        key={subindex}
                        className={subindex === 0 ? "active" : ""}
                      >
                        <span>{subitem.name}</span>
                      </li>
                    );
                  })}
                </ul> */}
              </li>
            );
          }
          return (
            <li
              onClick={this.props.handleCloseMenu}
              key={index}
              className={index === 0 ? "active" : ""}
            >
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}
