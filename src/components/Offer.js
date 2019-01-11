import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import backgroundImage from "../img/offer-bg.png";
import CollapsibleItem from "./CollapsibleItem";
// import kasai from "../img/kasai.png";
// import zehnder from "../img/zehnder.png";
// import fujitsu from "../img/fujitsu.png";
// import klimor from "../img/klimor.png";

export default class Offer extends Component {
  render() {
    return (
      <section
        className={"single-slide offer"}

        //swiper-slide
      >
        <div className="content-wrapper">
          <h2 className="heading">Nasza oferta</h2>

          <div>
            {this.props.mainMenu[2].submenu.map((item, index) => {
              return <CollapsibleItem key={index} data={item.content} />;
            })}
          </div>

          <div
            className="image-wrapper"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: "center center",
              backgroundSize: "cover"
            }}
          />
        </div>
      </section>
    );
  }
}
