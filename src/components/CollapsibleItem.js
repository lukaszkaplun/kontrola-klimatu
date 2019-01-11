import React, { Component } from "react";
import { Collapse } from "reactstrap";

export default class CollapsibleItem extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <li>
        <div>{this.props.data.heading}</div>
        <Collapse isOpen={this.state.collapse}>
          {/* <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card> */}
        </Collapse>
      </li>
    );
  }
}
