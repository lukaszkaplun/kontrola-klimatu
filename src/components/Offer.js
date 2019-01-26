import React, { Component } from "react";
import AC from "./AC";
import Waypoint from "react-waypoint";
import Pump from "./Pump";
import ERV from "./ERV";
import { Row, Col } from "reactstrap";
import backgroundImage from "../img/offer-bg.png";
import CollapsibleItem from "./CollapsibleItem";
import { InView } from "./InView";
export default class Offer extends Component {
  onLeave = ({ currentPosition }) => {
    this.props.enableFloatingIcon();
    if (currentPosition === Waypoint.above) {
      if (this.props.subpage === null) {
        this.props.updateHistory(this.props.dataHistory);
      }
      if (this.props.subpage === 0) {
        this.props.updateHistory(this.props.mainMenu[2].submenu[0].slug);
      }
      if (this.props.subpage === 1) {
        this.props.updateHistory(this.props.mainMenu[2].submenu[1].slug);
      }
      if (this.props.subpage === 2) {
        this.props.updateHistory(this.props.mainMenu[2].submenu[2].slug);
      }
    }
  };
  onEnter = ({ currentPosition }) => {
    this.props.enableFloatingIcon();
    var pathArray = window.location.pathname.split("/");
    var slug = pathArray[1];
    
    if (
      currentPosition === Waypoint.inside
      // &&
      // slug !== this.props.dataHistory
    ) {
      if (this.props.subpage === null) {
        this.props.updateHistory(this.props.dataHistory);
      }
      if (this.props.subpage === 0) {
        this.props.updateHistory(this.props.mainMenu[2].submenu[0].slug);
      }
      if (this.props.subpage === 1) {
        this.props.updateHistory(this.props.mainMenu[2].submenu[1].slug);
      }
      if (this.props.subpage === 2) {
        this.props.updateHistory(this.props.mainMenu[2].submenu[2].slug);
      }
    }
  };

  render() {
    return (
      <section
        id={this.props.dataHistory}
        data-history={this.props.dataHistory}
        className={
          !this.props.visible
            ? `swiper-slide single-slide ${
                this.props.subpage === null
                  ? "offer swiper-slide-active"
                  : "subpage swiper-slide-active"
              } hidden`
            : "swiper-slide single-slide offer"
        }
      >
        {!this.props.scrollEnabled && (
          <Waypoint onLeave={this.onLeave} scrollableAncestor={window}>
            <div
              style={{
                width: "10px",
                position: "absolute",
                top: "-110px",
                left: "0px",
                height: "1px",
                background: "transparent"
              }}
            />
          </Waypoint>
        )}

        {!this.props.scrollEnabled && (
          <Waypoint onEnter={this.onEnter} scrollableAncestor={window}>
            <div
              style={{
                width: "10px",
                position: "absolute",
                top: "50%",
                left: "0px",
                height: "10px",
                background: "transparent"
              }}
            />
          </Waypoint>
        )}
        {this.props.subpage === null && (
          <div className="content-wrapper">
            <Row noGutters>
              <Col xs={12} md={6}>
                <h2 className="heading">Nasza oferta</h2>

                <ul className="offer-wrapper">
                  {this.props.mainMenu[2].submenu.map((item, index) => {
                    return (
                      <CollapsibleItem
                        showSubpage={this.props.showSubpage}
                        key={index}
                        index={index}
                        collapse={this.props.collapse}
                        data={item.content}
                        toggle={this.props.toggleCollapse}
                      />
                    );
                  })}
                </ul>
              </Col>
              <Col className="align-self-center" xs={12} md={6}>
                <div
                  className="image-wrapper"
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover"
                  }}
                />
              </Col>
            </Row>
          </div>
        )}
        {this.props.subpage === 0 && (
          <ERV
            dataHistorySubmenu={this.props.mainMenu[2].submenu[0]}
            setActiveSubpageIndex={this.props.setActiveSubpageIndex}
            isSmallScreen={this.props.isSmallScreen}
            showSubpage={this.props.showSubpage}
          />
        )}
        {this.props.subpage === 1 && (
          <AC
            dataHistorySubmenu={this.props.mainMenu[2].submenu[1]}
            setActiveSubpageIndex={this.props.setActiveSubpageIndex}
            isSmallScreen={this.props.isSmallScreen}
            showSubpage={this.props.showSubpage}
          />
        )}
        {this.props.subpage === 2 && (
          <Pump
            dataHistorySubmenu={this.props.mainMenu[2].submenu[2]}
            setActiveSubpageIndex={this.props.setActiveSubpageIndex}
            isSmallScreen={this.props.isSmallScreen}
            showSubpage={this.props.showSubpage}
          />
        )}
      </section>
    );
  }
}
