import React, { Component } from "react";
import ReactDOM from "react-dom";
import AC from "./AC";

import Pump from "./Pump";
import ERV from "./ERV";
import { Row, Col } from "reactstrap";
import backgroundImage from "../img/offer-bg.png";
import CollapsibleItem from "./CollapsibleItem";
export default class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: null, subpage: null };
  }

  componentDidMount() {
    // console.log(ReactDOM.findDOMNode(this).getBoundingClientRect())
  }
  toggle = number => {
    if (this.state.collapse === number) {
      this.setState({ collapse: null });
    } else {
      this.setState({ collapse: number });
    }
  };
  showSubpage = number => {
    console.log(number)
    if (this.state.subpage === number) {
      this.setState({ subpage: null });
    } else {
      this.setState({ subpage: number });
    }
  };

  render() {
    return (
      <React.Fragment>
       { this.state.subpage === null && (
          <section
            data-history={this.props.dataHistory}
            className={
              !this.props.visible
                ? "swiper-slide single-slide offer hidden"
                : "swiper-slide single-slide offer"
            }
          >
            <div className="content-wrapper">
              <Row noGutters>
                <Col xs={12} md={6}>
                  <h2 className="heading">Nasza oferta</h2>

                  <ul className="offer-wrapper">
                    {this.props.mainMenu[2].submenu.map((item, index) => {
                      return (
                        <CollapsibleItem
                          showSubpage={this.showSubpage}
                          key={index}
                          index={index}
                          collapse={this.state.collapse}
                          data={item.content}
                          toggle={this.toggle}
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
          </section>
        )}
        {this.state.subpage === 0 && (
          <AC isSmallScreen={this.props.isSmallScreen} />
        )}
        {this.state.subpage === 1 && (
          <Pump isSmallScreen={this.props.isSmallScreen} />
        )}
        {this.state.subpage === 2 && (
          <ERV isSmallScreen={this.props.isSmallScreen} />
        )}
      </React.Fragment>
    );
  }
}
