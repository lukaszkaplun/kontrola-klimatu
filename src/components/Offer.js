import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import backgroundImage from "../img/offer-bg.png";
import CollapsibleItem from "./CollapsibleItem";
// import kasai from "../img/kasai.png";
// import zehnder from "../img/zehnder.png";
// import fujitsu from "../img/fujitsu.png";
// import klimor from "../img/klimor.png";

export default class Offer extends Component {
  render() {
    return (
      <section data-history={this.props.dataHistory}
        className={" swiper-slide single-slide offer"}


      >
        <div className="content-wrapper">

          <Row noGutters>
            <Col xs={12} md={6}>
              <h2 className="heading">Nasza oferta</h2>

              <ul className="offer-wrapper">
                {this.props.mainMenu[2].submenu.map((item, index) => {
                  return <CollapsibleItem key={index} data={item.content} />;
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
      </section>
    );
  }
}
