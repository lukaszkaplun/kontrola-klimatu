import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-tel-wrapper">
          <span>Skontaktuj się z nami:</span>{" "}
          <a className="footer-tel" href="tel:+48518864468">
            <span>{" "}+48 </span>518-864-468
          </a>
          {!this.props.isSmallScreen && 
          <a className="footer-tel" href="tel:+48517188535">
          {" | "}
            <span>{" "}+48 </span>517-188-535
          </a>
          }
        </div>
        {!this.props.isSmallScreen  && (
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
