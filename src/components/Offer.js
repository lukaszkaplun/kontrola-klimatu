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
  constructor(props) {
    super(props);
    this.state = {
      collapse: null
    };
  }

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
  toggleCollapse = (number, event) => {
    //   event.stopPropagation();
    //   event.preventDefault();
    //   if(!this.state.isBlocked) {
    //     this.handleBlocked()
    //   }

    //  console.log(number)

    if (this.state.collapse === number) {
      this.setState({ collapse: null });
    } else {
      this.setState({ collapse: number });
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
        {!this.props.scrollEnabled &&
          (this.props.isSmallScreen || this.props.isMobile) && (
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

        {!this.props.scrollEnabled &&
          (this.props.isSmallScreen || this.props.isMobile) && (
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
                <h2 className="heading">
                  <div className="bar-1" />
                  Nasza oferta
                </h2>
                <div className="left-animation">
                  <ul className="offer-wrapper">
                    {this.props.mainMenu[2].submenu.map((item, index) => {
                      return (
                        <CollapsibleItem
                          showSubpage={this.props.showSubpage}
                          key={index}
                          index={index}
                          collapse={this.state.collapse}
                          data={item.content}
                          toggle={this.toggleCollapse}
                        />
                      );
                    })}
                  </ul>
                </div>
              </Col>
              <Col className="align-self-center right-animation" xs={12} md={6}>
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
            isMobile={this.props.isMobile}
            showSubpage={this.props.showSubpage}
          />
        )}
        {this.props.subpage === 1 && (
          <AC
            dataHistorySubmenu={this.props.mainMenu[2].submenu[1]}
            setActiveSubpageIndex={this.props.setActiveSubpageIndex}
            isSmallScreen={this.props.isSmallScreen}
            isMobile={this.props.isMobile}
            showSubpage={this.props.showSubpage}
          />
        )}
        {this.props.subpage === 2 && (
          <Pump
            dataHistorySubmenu={this.props.mainMenu[2].submenu[2]}
            setActiveSubpageIndex={this.props.setActiveSubpageIndex}
            isSmallScreen={this.props.isSmallScreen}
            isMobile={this.props.isMobile}
            showSubpage={this.props.showSubpage}
          />
        )}
      </section>
    );
  }
}
