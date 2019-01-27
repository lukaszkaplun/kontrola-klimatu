import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Waypoint from "react-waypoint";
import backgroundImage from "../img/about-bg.png";
import kasai from "../img/clients/kasai.png";
import zehnder from "../img/clients/zehnder.png";
import fujitsu from "../img/clients/fujitsu.png";
import klimor from "../img/clients/klimor.png";

export default class About extends Component {
  onLeave = ({ currentPosition }) => {
    if (currentPosition === Waypoint.above) {
      this.props.enableFloatingIcon();
      this.props.updateHistory(this.props.dataHistory);
    }
  };
  onEnter = ({ currentPosition }) => {
    this.props.enableFloatingIcon();
    var pathArray = window.location.pathname.split("/");
    var slug = pathArray[1];
    if (
      currentPosition === Waypoint.inside &&
      slug !== this.props.dataHistory
    ) {
      this.props.updateHistory(this.props.dataHistory);
    }
  };
  render() {
    return (
      <section
        data-history={this.props.dataHistory}
        id={this.props.dataHistory}
        className={
          !this.props.visible
            ? "swiper-slide single-slide about hidden"
            : "swiper-slide single-slide about"
        }
      >
        {!this.props.scrollEnabled && this.props.isSmallScreen && (
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

        {!this.props.scrollEnabled && this.props.isSmallScreen && (
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

        <div className="content-wrapper">
          <Row noGutters>
            <Col xs={12} md={6}>
              <h2 className="heading">
                <div className="bar-1" />
                Kim jesteśmy?
              </h2>
              <div className="left-animation">
                <p className="paragraph">
                  Zespołem dwóch młodych ludzi który swoje doświadczenie
                  instalacyjne zdobywał{" "}
                  <strong>
                    podczas realizacji projektów zarówno w Wielkiej Brytanii jak
                    i w Polsce.
                  </strong>{" "}
                  Idziemy z duchem czasu, jesteśmy na bieżąco ze wszelkimi
                  nowinkami w branży. Stawiamy na produkty i usługi najwyższej
                  jakości.
                </p>
                <p className="paragraph">Nasi partnerzy:</p>
                <div className="partner-wrapper">
                  <div className="partner">
                    <img src={kasai} alt="partner-logo" />
                  </div>
                  <div className="partner">
                    <img src={zehnder} alt="partner-logo" />
                  </div>
                  <div className="partner">
                    <img src={fujitsu} alt="partner-logo" />
                  </div>
                  <div className="partner">
                    <img src={klimor} alt="partner-logo" />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} className="right-animation">
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
      </section>
    );
  }
}
