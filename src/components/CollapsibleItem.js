import React, { Component } from "react";
import { Collapse } from "reactstrap";
import arrow from "../img/arrow.svg";

export default class CollapsibleItem extends Component {
  render() {
    return (
      <li>
        <div className="offer-header-wrapper">
        <div style={{flex: "0 0 20px", marginRight:"10px", marginTop:"5px"}}>
        <img className={this.props.collapse === this.props.index? "arrow rotated": "arrow"} src={arrow} alt="arrow" />
        </div>
         
          <h3
            className="subheading"
            onClick={event => this.props.toggle(this.props.index, event)}
          >
            {this.props.data.heading}
          </h3>
        </div>

        <Collapse isOpen={this.props.collapse === this.props.index}>
          <p className="paragraph">{this.props.data.body}</p>
          <button
            className="button"
            onClick={() => this.props.showSubpage(this.props.index)}
          >
            {this.props.data.buttonCopy}
            <div className="button-chevron" />
          </button>
        </Collapse>
      </li>
    );
  }
}
