import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import backgroundImage from "../img/home-bg.png";

export default class HomePage extends Component {
  render() {
    return (
      <div
        className="single-slide swiper-slide"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center center",
          backgroundSize: "cover"
        }}
      >
        <div className="content-wrapper">
          <div className="col">
            <h2 className="header">{this.props.text}</h2>
            <p className="paragraph">
              Jeżeli nadszedł w Twoim życiu czas w którym zapragnąłeś wybudować
              swój własny dom lub zmodernizować dotychczasowy i nie do końca
              wiesz w jaki sposób stworzyć w nim odpowiedni komfort termiczny
              dla Ciebie i Twojej rodziny zapoznaj się z naszą ofertą.{" "}
              <strong>
                Jeśli Cię zainteresuje zadzwoń i umów się na spotkanie.
                Wyjaśnimy wszystko dokładnie i bez zbędnych zawiłości.
              </strong>{" "}
              Gwarantujemy fachowe doradztwo, rzetelne wsparcie techniczne i
              sprawdzone rozwiązania w dziedzinie utrzymania komfortu w Twoim
              domu. Wykonamy projekt i wstępną kalkulację kosztów za darmo!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
