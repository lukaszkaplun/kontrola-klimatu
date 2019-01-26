import React, { Component } from "react";
import backgroundImage from "../img/logo.png";
import { Row, Col } from "reactstrap";
import Waypoint from "react-waypoint";
export default class Contact extends Component {
  onLeave = ({ currentPosition }) => {
    if (currentPosition === Waypoint.above) {
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
        <div className="content-wrapper">
          <Row noGutters>
            <Col xs={12} md={6}>
              <h2 className="heading">Kontakt</h2>
              <p className="paragraph">
                Skontaktuj się z nami, lorem ipsum dolor sit amed:
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
                    <div>
                      <span itemProp="postalCode">18-300</span>{" "}
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
                  <div>
                    <a href="tel:+48518864368" itemProp="telephone">
                      +48{" "}
                      <span className="text-red font-weight-800">
                        518 864 368
                      </span>
                    </a>
                    <a href="tel:+48517188545" itemProp="telephone">
                      +48{" "}
                      <span className="text-red font-weight-800">
                        517 188 545
                      </span>
                    </a>
                  </div>
                  <div>
                    <a
                      className="font-weight-800"
                      href="mailto:biuro@kontrolaklimatu.pl"
                      itemProp="email"
                    >
                      <span className="text-red">biuro</span>@kontrolaklimatu.pl
                    </a>
                  </div>
                </div>
              </div>
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
      </section>
    );
  }
}
