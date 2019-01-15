import React, { Component } from "react";
import { Collapse } from "reactstrap";

export default class CollapsibleItem extends Component {
  constructor(props) {
    super(props);

    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    return (
      <li>
        <h3 className="subheading" onClick={this.toggle}>
          {this.props.data.heading}
        </h3>
        <Collapse isOpen={this.state.collapse}>
          <p className="paragraph">{this.props.data.body}</p>
          <button >
            {this.props.data.buttonCopy}
             <div className="button-chevron" />
          </button>
        </Collapse>
      </li>
    );
  }
}
