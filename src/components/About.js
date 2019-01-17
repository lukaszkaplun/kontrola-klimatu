import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import backgroundImage from "../img/about-bg.png";
import kasai from "../img/clients/kasai.png";
import zehnder from "../img/clients/zehnder.png";
import fujitsu from "../img/clients/fujitsu.png";
import klimor from "../img/clients/klimor.png";

export default class About extends Component {
  render() {
    return (
      <section data-history={this.props.dataHistory}
      className={!this.props.visible?"swiper-slide single-slide about hidden": "swiper-slide single-slide about"}>
        <div className="content-wrapper">
         
            <Row noGutters>
              <Col xs={12} md={6}>
                <h2 className="heading">Kim jesteśmy?</h2>
                <p className="paragraph">
                  Zespołem dwóch młodych ludzi który swoje doświadczenie instalacyjne
            zdobywał{" "}
                  <strong>
                    podczas realizacji projektów zarówno w Wielkiej Brytanii jak i w
                    Polsce.
            </strong>{" "}
                  Idziemy z duchem czasu, jesteśmy na bieżąco ze wszelkimi nowinkami w
                  branży. Stawiamy na produkty i usługi najwyższej jakości.
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

              </Col>
              <Col xs={12} md={6}>
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
