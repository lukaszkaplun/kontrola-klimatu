import React, { Component } from "react";
// import { Container, Row, Col } from "reactstrap";
import backgroundImage from "../img/home-bg.png";

export default class HomePage extends Component {
  render() {
    return (
      <section data-history={this.props.dataHistory}
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
            <h2 className="heading">Witaj!</h2>
          </div>

          <p className="paragraph">
            Jeżeli nadszedł w Twoim życiu czas w którym zapragnąłeś wybudować
            swój własny dom lub zmodernizować dotychczasowy i nie do końca wiesz
            w jaki sposób stworzyć w nim odpowiedni komfort termiczny dla Ciebie
            i Twojej rodziny zapoznaj się z naszą ofertą.
          </p>
          <p className="paragraph">
            {" "}
            <strong>
              Jeśli Cię zainteresuje zadzwoń i umów się na spotkanie. Wyjaśnimy
              wszystko dokładnie i bez zbędnych zawiłości.
            </strong>{" "}
            Gwarantujemy fachowe doradztwo, rzetelne wsparcie techniczne i
            sprawdzone rozwiązania w dziedzinie utrzymania komfortu w Twoim
            domu. Wykonamy projekt i wstępną kalkulację kosztów za darmo!
          </p>
        </div>
      </section>
    );
  }
}
