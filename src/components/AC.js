import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import slide1 from "../img/ac/slide1.png";
import slide2 from "../img/ac/slide2.png";
import slide3 from "../img/ac/slide3.png";
import Swiper from "react-id-swiper";
export default class AC extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.acRef = null;
    this.setAcRef = node => {
      this.acRef = node.swiper;
    };
  }

  shouldComponentUpdate() {
    return false;
  }
  render() {
    // this.setAcRef = node => {
    //   if (!this.props.isSmallScreen) {
    //     this.acRef = node.swiper;
    //   } else {
    //     this.acRef = null;
    //   }
    // };

    const params = {
      autoHeight: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
        // renderBullet: (index, className) => {
        //   return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
      }
    };

    return (
      <section className={" swiper-slide single-slide subpage"}>
        <div className="content-wrapper">
          <h2 className="heading">Klimatyzacja</h2>

          <Swiper {...params} ref={this.setAcRef}>
            <Row noGutters className="slide-1">
              <Col xs={12} md={6}>
                <h3 className="subheading">Po co montować klimatyzację?</h3>
                <p className="paragraph">
                  Coraz większą uwagę przykładamy do komfortu w jakim pracujemy
                  bądź spędzamy czas w domu. Dwoma najważniejszymi czynnikami
                  wpływającymi na komfort cieplny człowieka jest zachowana na
                  odpowiednim poziomie temperatura oraz wilgotność otoczenia. Za
                  pomocą urządzeń klimatyzacyjnych możemy kontrolować te zmienne
                  na tyle aby ich wartość były dokładnie dopasowane do naszego
                  organizmu.
                </p>
              </Col>
              <Col xs={12} md={6} className="align-self-center">
                <div
                  className="image-wrapper"
                  style={{
                    backgroundImage: `url(${slide1})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover"
                  }}
                />
              </Col>
            </Row>
            <Row noGutters className="slide-2">
              <Col xs={12} md={6}>
                <h3 className="subheading">Jak działa klimatyzacja?</h3>
                <p className="paragraph">
                  Czynnik chłodniczy jako chłodna ciecz dostaje się do
                  wymiennika ciepła wewnątrz pomieszczenia (parownik). Pod
                  wpływem działania wentylatora ciepłe powietrze pobierane jest
                  z pomieszczenia. W tym samym czasie przechodzi ono przez
                  parownik w którym zachodzi zjawisko odparowania polegające na
                  odebraniu energii cieplnej przez czynnik będący w tym czasie w
                  wymienniku czego produktem „ubocznym” jest schłodzone
                  powietrze.
                </p>
              </Col>
              <Col xs={12} md={6} className="align-self-center">
                <div
                  className="image-wrapper"
                  style={{
                    backgroundImage: `url(${slide2})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover"
                  }}
                />
              </Col>
            </Row>
            <Row noGutters className="slide-3">
              <Col xs={12} md={6}>
                <h3 className="subheading">
                  Najczęściej stosowane rozwiązania w domach
                </h3>
                <p className="paragraph">
                  Najczęściej stosowane rozwiązania w domkach jednorodzinnych
                  lub mieszkaniach określane są jako układy SPLIT i MULTISPLIT.
                </p>
                <ul>
                  <li>
                    <span className="font-weight-800 text-red">SPLIT</span> –
                    układ w którym jedna jednostka zewnętrzna połączona jest z
                    jedną jednostką wewnętrzną.
                  </li>

                  <li>
                    <span className="font-weight-800 text-red">MULTISPLIT</span>{" "}
                    – układ w którym jedna jednostka zewnętrzna może obsługiwać
                    od 2 do 8 jednostek wewnętrznych. Doskonale sprawdza się w
                    sytuacji w której chcemy zapewnić klimatyzację dla każdego
                    pomieszczenia w budynku.
                  </li>
                </ul>
                <p className="paragraph">
                  Najczęściej spotykanymi modelami są jednostki ścienne oraz
                  jednostki kasetonowe.
                </p>
              </Col>
              <Col xs={12} md={6} className="align-self-center">
                <div
                  className="image-wrapper"
                  style={{
                    backgroundImage: `url(${slide3})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover"
                  }}
                />
              </Col>
            </Row>
          </Swiper>
        </div>
      </section>
    );
  }
}
