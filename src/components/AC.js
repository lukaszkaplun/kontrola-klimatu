import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "reactstrap";
import slide1 from "../img/ac/slide1.png";
import slide2 from "../img/ac/slide2.png";
import slide3 from "../img/ac/slide3.png";
import Swiper from "react-id-swiper";
import {TweenLite} from 'gsap/TweenLite'
import ScrollToPlugin from "gsap/ScrollToPlugin";
export default class AC extends Component {
  constructor(props) {
    super(props);
    this.acSwiper = null;
  }

  componentDidMount() {
    this.acSwiper = ReactDOM.findDOMNode(this).getElementsByClassName(
      "swiper-container"
    )[0].swiper;
    if( this.acSwiper!== null) {
      this.props.setActiveSubpageIndex(this.acSwiper, 1);
    }
   
  }

  render() {
    const params = {
      autoHeight: true,
      loop: true,
      on:{
        transitionEnd:()=>{
          TweenLite.to(window, 1, {scrollTo:{y:`#${this.props.dataHistorySubmenu.slug}`, offsetY:110}});
        }
      },
      pagination: {
        el: ".swiper-pagination-nested",
        clickable: true
      }
    };

    return (
      <div className="content-wrapper"  id={this.props.dataHistorySubmenu.slug}>
        

        <Swiper {...params}>
          <Row noGutters className="slide-1">
            <Col xs={12} md={6}>
            <h2 className="heading">Klimatyzacja</h2>
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
            <Col xs={12} md={6}>
              <div
                className="image-wrapper"
                style={{
                  backgroundImage: `url(${slide1})`,
                  backgroundPosition: "center center",
                 backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                }}
              />
            </Col>
          </Row>
          <Row noGutters className="slide-2">
            <Col xs={12} md={6}>
            <h2 className="heading">Klimatyzacja</h2>
              <h3 className="subheading">Jak działa klimatyzacja?</h3>
              <p className="paragraph">
                Czynnik chłodniczy jako chłodna ciecz dostaje się do wymiennika
                ciepła wewnątrz pomieszczenia (parownik). Pod wpływem działania
                wentylatora ciepłe powietrze pobierane jest z pomieszczenia. W
                tym samym czasie przechodzi ono przez parownik w którym zachodzi
                zjawisko odparowania polegające na odebraniu energii cieplnej
                przez czynnik będący w tym czasie w wymienniku czego produktem
                „ubocznym” jest schłodzone powietrze.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <div
                className="image-wrapper"
                style={{
                  backgroundImage: `url(${slide2})`,
                  backgroundPosition: "center center",
                 backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                }}
              />
            </Col>
          </Row>
          <Row noGutters className="slide-3">
            <Col xs={12} md={6}>
            <h2 className="heading">Klimatyzacja</h2>
              <h3 className="subheading">
                Najczęściej stosowane rozwiązania w domach
              </h3>
              <p className="paragraph">
                Najczęściej stosowane rozwiązania w domkach jednorodzinnych lub
                mieszkaniach określane są jako układy SPLIT i MULTISPLIT.
              </p>
              <ul>
                <li>
                  <span className="font-weight-800 text-red">SPLIT</span> –
                  układ w którym jedna jednostka zewnętrzna połączona jest z
                  jedną jednostką wewnętrzną.
                </li>

                <li>
                  <span className="font-weight-800 text-red">MULTISPLIT</span> –
                  układ w którym jedna jednostka zewnętrzna może obsługiwać od 2
                  do 8 jednostek wewnętrznych. Doskonale sprawdza się w sytuacji
                  w której chcemy zapewnić klimatyzację dla każdego
                  pomieszczenia w budynku.
                </li>
              </ul>
              <p className="paragraph">
                Najczęściej spotykanymi modelami są jednostki ścienne oraz
                jednostki kasetonowe.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <div
                className="image-wrapper"
                style={{
                  backgroundImage: `url(${slide3})`,
                  backgroundPosition: "center center",
                 backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                }}
              />
            </Col>
          </Row>
        </Swiper>
        {this.props.isSmallScreen && 
        <button
          className="button"
          onClick={() => this.props.showSubpage(1)}
          style={{ margin: "0 auto" }}
        >
          <div className="button-chevron reversed" />
          Powrót
        </button>
        }
      </div>
    );
  }
}
