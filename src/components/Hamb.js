import React, { Component } from "react";

export default class Hamb extends Component {
  render() {
    return (
      <button
        className={this.props.isMenuOpen ? "hamb open" : "hamb"}
        onClick={this.props.handleOpenMenu}
      >
        <div />
        <div />
        <div />
      </button>
    );
  }
}
