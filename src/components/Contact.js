import React, { Component } from "react";
import telIcon from "../img/tel-icon.svg";
import addressIcon from "../img/address-icon.svg";
import mailIcon from "../img/mail-icon.svg";

import backgroundImage from "../img/logo.png";
import { Row, Col } from "reactstrap";
import Waypoint from "react-waypoint";
export default class Contact extends Component {
  onLeave = ({ currentPosition }) => {
    if (currentPosition === Waypoint.above) {
      this.props.disableFloatingIcon();
      this.props.updateHistory(this.props.dataHistory);
    }
  };
  onEnter = ({ currentPosition }) => {
    var pathArray = window.location.pathname.split("/");
    var slug = pathArray[1];
    if (
      currentPosition === Waypoint.inside &&
      slug !== this.props.dataHistory
    ) {
      this.props.disableFloatingIcon();
      this.props.updateHistory(this.props.dataHistory);
    }
  };
  render() {
    return (
      <section
        data-history={this.props.dataHistory}
        id={this.props.dataHistory}
        className={" swiper-slide single-slide contact"}
      >
        {!this.props.scrollEnabled && this.props.isSmallScreen && (
          <Waypoint onLeave={this.onLeave} scrollableAncestor={window}>
            <div
              style={{
                width: "10px",
                position: "absolute",
                top: "0px",
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
                bottom: "0px",
                left: "0px",
                height: "1px",
                background: "transparent"
              }}
            />
          </Waypoint>
        )}
        <div className="content-wrapper">
          <Row noGutters>
            <Col xs={12} md={6}>
              <h2 className="heading">
                {" "}
                <div className="bar-1" />
                Kontakt
              </h2>

              <div className="left-animation">
                <p className="paragraph">
                  Jeśli interesuje Cię nasza oferta, lub masz jakieś pytania, zadzwoń i umów się na spotkanie. To nic nie kosztuje!:
                </p>
                <div className="contact-wrapper">
                  <div itemScope itemType="http://schema.org/LocalBusiness">
                    <span style={{ display: "none" }} itemProp="name">
                      Kontrola Klimatu
                    </span>
                    <div
                      itemProp="address"
                      itemScope
                      itemType="http://schema.org/PostalAddress"
                    >
                      <div className="d-flex align-items-center">
                        <img src={addressIcon} alt="address" />
                        <span
                          style={{ marginRight: "15px" }}
                          itemProp="postalCode"
                        >
                          18-300
                        </span>{" "}
                        <span
                          className="text-red font-weight-800"
                          itemProp="addressLocality"
                        >
                          Zambrów
                        </span>
                      </div>
                      <div>
                        ul.<span itemProp="streetAddress">Poświątne 64</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center flex-wrap">
                      <img src={telIcon} alt="telephone" />
                      <a href="tel:+48518864368" itemProp="telephone">
                        +48{" "}
                        <span className="text-red font-weight-800">
                          518 864 368
                        </span>
                      </a>
                      <a
                        style={{ flex: "0 0 90%", marginLeft: "31px" }}
                        href="tel:+48517188545"
                        itemProp="telephone"
                      >
                        +48{" "}
                        <span className="text-red font-weight-800">
                          517 188 545
                        </span>
                      </a>
                    </div>
                    <div className="d-flex align-items-center flex-wrap">
                      <img src={mailIcon} alt="email" />
                      <a
                        className="font-weight-800"
                        href="mailto:biuro@kontrolaklimatu.pl"
                        itemProp="email"
                      >
                        <span className="text-red">biuro</span>
                        @kontrolaklimatu.pl
                      </a>
                    </div>
                  </div>
                </div>
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
      </section>
    );
  }
}
