import React, { Component } from "react";
import scrollToComponent from 'react-scroll-to-component';


export default class MainMenu extends Component {
  render() {
    return (
      <ul className="main-menu">
        {this.props.mainMenu.map((item, index) => {
          if (item.submenu !== null) {
            return (
              <li key={index} className={index === 0 ? "active" : ""}>
                <span>{item.name}</span>

                <ul>
                  {item.submenu.map((subitem, subindex) => {
                    return (
                      <li onClick={() => scrollToComponent(this.about, { offset: 0, align: 'top', duration: 1500})}
                        key={subindex}
                        className={subindex === 0 ? "active" : ""}
                      >
                        <span>{subitem.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }
          return (
            <li key={index} className={index === 0 ? "active" : ""}>
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}
