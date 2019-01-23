import React, { Component } from "react";
import AC from "./AC";
import Pump from "./Pump";
import ERV from "./ERV";
import { Row, Col } from "reactstrap";
import backgroundImage from "../img/offer-bg.png";
import CollapsibleItem from "./CollapsibleItem";
export default class Offer extends Component {
  render() {
    return (
      <React.Fragment>
        <section
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
              setActiveSubpageIndex={this.props.setActiveSubpageIndex}
              isSmallScreen={this.props.isSmallScreen}
             showSubpage={this.props.showSubpage}
            />
          )}
          {this.props.subpage === 1 && (
            <AC
              setActiveSubpageIndex={this.props.setActiveSubpageIndex}
              isSmallScreen={this.props.isSmallScreen}
             showSubpage={this.props.showSubpage}
            />
          )}
          {this.props.subpage === 2 && (
            <Pump
              setActiveSubpageIndex={this.props.setActiveSubpageIndex}
              isSmallScreen={this.props.isSmallScreen}
             showSubpage={this.props.showSubpage}
            />
          )}
        </section>
      </React.Fragment>
    );
  }
}
