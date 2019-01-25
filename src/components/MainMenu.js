import React, { Component } from "react";
import classNames from "classnames";
// import scrollToElement from "scroll-to-element";

export default class MainMenu extends Component {
  renderClassNames = index => {
    let menuClasses = classNames({
     
      "active": index === this.props.activeIndex,
      "reversed": index === 2,
      
    });
    return menuClasses;
  };

  render() {
    console.log( this.props.isSmallScreen)
  
    return (
      <ul className="main-menu">
        {this.props.mainMenu.map((item, index) => {
          if (item.submenu !== null) {
            return (
              <li key={index} className={this.renderClassNames(index)}>
                <button
                 
                  onClick={(event) =>
                    this.props.isSmallScreen
                      ? this.props.handleCloseMenu(index)
                      : this.props.handleMenu(index, event)
                  }
                >
                  <span>{item.name}</span>
                </button>

                {(this.props.isSmallScreen || 
                  this.props.activeIndex === 2) && (
                    <ul>
                      {item.submenu.map((subitem, subindex) => {
                        return (
                          <li
                           
                            key={subindex}
                            className={subindex === this.props.activeSubpageIndex ? "active" : ""}
                          >
                            <button
                             
                              onClick={() =>
                                this.props.isSmallScreen
                                  ? this.props.handleCloseMenu(index)
                                  : this.props.showSubpage(subindex)
                              }
                            >
                              <span>{subitem.name}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
              </li>
            );
          }
          return (
            <li
              key={index}
              className={this.renderClassNames(index)}
            >
              <button
               
                onClick={(event) =>
                  this.props.isSmallScreen
                    ? this.props.handleCloseMenu(index)
                    : this.props.handleMenu(index, event)
                }
              >
                <span>{item.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
