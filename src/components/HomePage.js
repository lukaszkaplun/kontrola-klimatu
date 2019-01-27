import React, { Component } from "react";
// import { Container, Row, Col } from "reactstrap";
import backgroundImage from "../img/home-bg.png";
export default class HomePage extends Component {
  componentDidMount() {
    //   let elTop = ReactDOM.findDOMNode(this).getBoundingClientRect().top;
    //  this.props.updateScrollPosition(elTop)
  }
  render() {
    return (
      <section
        id={this.props.dataHistory}
        data-history={this.props.dataHistory}
        className={"swiper-slide single-slide homepage"}
      >
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
              {(!this.props.isSmallScreen && !this.props.isMobile) && (
                <div className="left-animation">
                  <p className="paragraph">
                    Jeżeli nadszedł w Twoim życiu czas w którym zapragnąłeś
                    wybudować swój własny dom lub zmodernizować dotychczasowy i
                    nie do końca wiesz w jaki sposób stworzyć w nim odpowiedni
                    komfort termiczny dla Ciebie i Twojej rodziny zapoznaj się z
                    naszą ofertą.
                  </p>
                  <p className="paragraph">
                    {" "}
                    <strong>
                      Jeśli Cię zainteresuje zadzwoń i umów się na spotkanie.
                      Wyjaśnimy wszystko dokładnie i bez zbędnych zawiłości.
                    </strong>{" "}
                    Gwarantujemy fachowe doradztwo, rzetelne wsparcie techniczne
                    i sprawdzone rozwiązania w dziedzinie utrzymania komfortu w
                    Twoim domu. Wykonamy projekt i wstępną kalkulację kosztów za
                    darmo!
                  </p>
                </div>
              )}
            </div>
          </div>
          {(this.props.isSmallScreen || this.props.isMobile) && (
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
