import React, { Component } from "react";
// import { Container, Row, Col } from "reactstrap";
import Waypoint from "react-waypoint";
import backgroundImage from "../img/home-bg.png";
export default class HomePage extends Component {
  componentDidMount() {
    //   let elTop = ReactDOM.findDOMNode(this).getBoundingClientRect().top;
    //  this.props.updateScrollPosition(elTop)
  }
  onLeave = ({ currentPosition }) => {
    if (currentPosition === Waypoint.above) {
      this.props.enableFloatingIcon();
      this.props.updateHistory(this.props.dataHistory);
    }
  };
  onEnter = ({ currentPosition }) => {
    this.props.enableFloatingIcon();
    var pathArray = window.location.pathname.split("/");
    var slug = pathArray[1];
    if (
      currentPosition === Waypoint.inside &&
      slug !== this.props.dataHistory
    ) {
      this.props.updateHistory(this.props.dataHistory);
    }
  };
  render() {
    return (
      <section
        id={this.props.dataHistory}
        data-history={this.props.dataHistory}
        className={"swiper-slide single-slide homepage"}
      >
        {!this.props.scrollEnabled && this.props.isSmallScreen && (
          <Waypoint onLeave={this.onLeave} scrollableAncestor={window}>
            <div
              style={{
                width: "10px",
                position: "absolute",
                top: "-110px",
                left: "0px",
                height: "1px",
                background: "transparent"
              }}
            />
          </Waypoint>
        )}

        {!this.props.scrollEnabled && this.props.isSmallScreen && (
          <Waypoint onEnter={this.onEnter} scrollableAncestor={window}>
            <div
              style={{
                width: "10px",
                position: "absolute",
                top: "50%",
                left: "0px",
                height: "10px",
                background: "transparent"
              }}
            />
          </Waypoint>
        )}

        <div className="content-wrapper">
          <div
            className="image-wrapper"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: "center center",
              backgroundSize: "cover"
            }}
          >
            <div className="wrapper">
              <h2 className="heading">
                <div className="bar-1" />
                Witaj!
              </h2>
              {!this.props.isSmallScreen && (
                <div className="left-animation">
                  <p className="paragraph">
                    Jeżeli nadszedł w Twoim życiu czas, w którym zapragnąłeś
                    wybudować swój własny dom lub zmodernizować dotychczasowy i
                    nie do końca wiesz, w jaki sposób stworzyć w nim odpowiedni
                    komfort termiczny dla Ciebie i Twojej rodziny, zapoznaj się
                    z naszą ofertą.
                  </p>
                  <p className="paragraph">
                    {" "}
                    <strong>
                      Jeśli Cię zainteresuje, zadzwoń i umów się na spotkanie.
                      Wyjaśnimy wszystko dokładnie i bez zbędnych zawiłości.
                    </strong>{" "}
                    Gwarantujemy fachowe doradztwo, rzetelne wsparcie techniczne
                    i sprawdzone rozwiązania w dziedzinie utrzymania komfortu w
                    Twoim domu. Wykonamy wstępną kalkulację kosztów za darmo!
                  </p>
                </div>
              )}
            </div>
          </div>
          {this.props.isSmallScreen && (
            <React.Fragment>
              <p className="paragraph">
                Jeżeli nadszedł w Twoim życiu czas w którym zapragnąłeś
                wybudować swój własny dom lub zmodernizować dotychczasowy i nie
                do końca wiesz w jaki sposób stworzyć w nim odpowiedni komfort
                termiczny dla Ciebie i Twojej rodziny zapoznaj się z naszą
                ofertą.
              </p>
              <p className="paragraph">
                {" "}
                <strong>
                  Jeśli Cię zainteresuje zadzwoń i umów się na spotkanie.
                  Wyjaśnimy wszystko dokładnie i bez zbędnych zawiłości.
                </strong>{" "}
                Gwarantujemy fachowe doradztwo, rzetelne wsparcie techniczne i
                sprawdzone rozwiązania w dziedzinie utrzymania komfortu w Twoim
                domu. Wykonamy projekt i wstępną kalkulację kosztów za darmo!
              </p>
            </React.Fragment>
          )}
        </div>
      </section>
    );
  }
}
