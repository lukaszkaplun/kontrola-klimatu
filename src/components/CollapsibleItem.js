import React, { Component } from "react";
import { Collapse } from "reactstrap";

export default class CollapsibleItem extends Component {
  render() {
    return (
      <li>
        <h3
          className="subheading"
          onClick={(event) => this.props.toggle(this.props.index, event)}
        >
          {this.props.data.heading}
        </h3>
        <Collapse isOpen={this.props.collapse === this.props.index}>
          <p className="paragraph">{this.props.data.body}</p>
          <button className="button" onClick={()=>this.props.showSubpage(this.props.index)}>
            {this.props.data.buttonCopy}
            <div className="button-chevron" />
          </button>
        </Collapse>
      </li>
    );
  }
}
