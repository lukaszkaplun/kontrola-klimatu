import React, { Component } from "react";

import HomePage from "./HomePage";
import About from "./About";
import Offer from "./Offer";
import Certificates from "./Certificates";
import Gallery from "./Gallery";
import Contact from "./Contact";

export default class PageBody extends Component {
  render() {


    return (
    
      <React.Fragment>
        <HomePage dataHistory={this.props.mainMenu[0].name}  updateScrollPosition={this.props.updateScrollPosition} />
        <About visible={this.props.visible} dataHistory={this.props.mainMenu[1].name} />
        <Offer
           showSubpage={this.props.showSubpage}
           subpage={this.props.subpage}
           toggleCollapse={this.props.toggleCollapse}
           collapse={this.props.collapse}
        setActiveSubpageIndex={this.props.setActiveSubpageIndex}
          visible={this.props.visible}
          mainMenu={this.props.mainMenu}
          dataHistory={this.props.mainMenu[2].name}
        />
      
        <Certificates
          isSmallScreen={this.props.isSmallScreen}
          mainMenu={this.props.mainMenu}
          dataHistory={this.props.mainMenu[3].name}
        />
        <Gallery
          isSmallScreen={this.props.isSmallScreen}
          mainMenu={this.props.mainMenu}
          dataHistory={this.props.mainMenu[4].name}
        />
        <Contact
          mainMenu={this.props.mainMenu}
          dataHistory={this.props.mainMenu[5].name}
        />
      </React.Fragment>

     
    );
  }
}
