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
        <HomePage
          scrollEnabled={this.props.scrollEnabled}
          dataHistory={this.props.mainMenu[0].name}
          updateScrollPosition={this.props.updateScrollPosition}
        />
        <About
          enableFloatingIcon={this.props.enableFloatingIcon}
          disableFloatingIcon={this.props.disableFloatingIcon}
          scrollEnabled={this.props.scrollEnabled}
          updateHistory={this.props.updateHistory}
          visible={this.props.visible}
          dataHistory={this.props.mainMenu[1].slug}
        />
        <Offer
          enableFloatingIcon={this.props.enableFloatingIcon}
          disableFloatingIcon={this.props.disableFloatingIcon}
          scrollEnabled={this.props.scrollEnabled}
          updateHistory={this.props.updateHistory}
          showSubpage={this.props.showSubpage}
          subpage={this.props.subpage}
          toggleCollapse={this.props.toggleCollapse}
          collapse={this.props.collapse}
          setActiveSubpageIndex={this.props.setActiveSubpageIndex}
          visible={this.props.visible}
          mainMenu={this.props.mainMenu}
          dataHistory={this.props.mainMenu[2].slug}
          dataHistorySubmenu={this.props.mainMenu[2].submenu}
        />

        <Certificates
          enableFloatingIcon={this.props.enableFloatingIcon}
          disableFloatingIcon={this.props.disableFloatingIcon}
          scrollEnabled={this.props.scrollEnabled}
          updateHistory={this.props.updateHistory}
          isSmallScreen={this.props.isSmallScreen}
          mainMenu={this.props.mainMenu}
          dataHistory={this.props.mainMenu[3].slug}
        />
        <Gallery
          enableFloatingIcon={this.props.enableFloatingIcon}
          disableFloatingIcon={this.props.disableFloatingIcon}
          scrollEnabled={this.props.scrollEnabled}
          updateHistory={this.props.updateHistory}
          isSmallScreen={this.props.isSmallScreen}
          mainMenu={this.props.mainMenu}
          dataHistory={this.props.mainMenu[4].slug}
        />
        <Contact
          enableFloatingIcon={this.props.enableFloatingIcon}
          disableFloatingIcon={this.props.disableFloatingIcon}
          scrollEnabled={this.props.scrollEnabled}
          updateHistory={this.props.updateHistory}
          mainMenu={this.props.mainMenu}
          dataHistory={this.props.mainMenu[5].slug}
        />
      </React.Fragment>
    );
  }
}
