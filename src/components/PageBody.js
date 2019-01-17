import React, { Component } from "react";

import HomePage from "./HomePage";
import About from "./About";
import Offer from "./Offer";
import Certificates from "./Certificates";
import Gallery from "./Gallery";
import Contact from "./Contact";
import AC from "./AC";
import Pump from "./Pump";
import ERV from "./ERV";
export default class PageBody extends Component {
  render() {

    return (
    
      <React.Fragment>
        <HomePage dataHistory={this.props.mainMenu[0].name} />
        <About  visible={this.props.visible} dataHistory={this.props.mainMenu[1].name} />
        <Offer
          visible={this.props.visible}
          mainMenu={this.props.mainMenu}
          dataHistory={this.props.mainMenu[2].name}
        />
        <AC isSmallScreen={this.props.isSmallScreen} />
        <Pump isSmallScreen={this.props.isSmallScreen}/>
        <ERV isSmallScreen={this.props.isSmallScreen}/>
        {/* <Certificates
          isSmallScreen={this.props.isSmallScreen}
          mainMenu={this.props.mainMenu}
          dataHistory={this.props.mainMenu[3].name}
        /> */}
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
