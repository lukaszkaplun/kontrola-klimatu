import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-tel-wrapper">
          <span>Skontaktuj się z nami:</span>{" "}
          <a className="footer-tel" href="tel:+48535952092">
            <span>{" "}+48 </span>535-952-092
          </a>
        </div>
        {!this.props.isSmallScreen && (
          <div className="scroll-animation-wrapper">
            <div className="mouse">
              <div className="mouse-ball" />
            </div>
            <div className="mouse-arrow" />
          </div>
        )}

        <div className="social-media-wrapper">
          <span>Znajdziesz nas również: </span>

          <ul>
            {this.props.socialMenu.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item.icon} alt={item.name} />
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    );
  }
}
