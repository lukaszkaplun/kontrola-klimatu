import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "reactstrap";
import slide1 from "../img/ac/slide1.png";
import slide2 from "../img/ac/slide2.png";
import slide3 from "../img/ac/slide3.png";
import Swiper from "react-id-swiper";

import { TweenLite, TimelineLite } from "gsap";
import { ScrollToPlugin } from "gsap/all";
const timing = 1;
export default class AC extends Component {
  constructor(props) {
    super(props);
    this.acSwiper = null;
  }

  componentDidMount() {
    // eslint-disable-next-line
    const plugins = [ScrollToPlugin];

    this.acSwiper = ReactDOM.findDOMNode(this).getElementsByClassName(
      "swiper-container"
    )[0].swiper;
    if (this.acSwiper !== null) {
      this.props.setActiveSubpageIndex(this.acSwiper, 1);
    }
    this.pageSwiper = ReactDOM.findDOMNode(
      this
    ).parentElement.parentElement.parentElement.swiper;

    !this.props.isSmallScreen && this.props.disableMousewheel(this.pageSwiper);
  }
  componentWillUnmount() {
    let pageSwiper = ReactDOM.findDOMNode(this).parentElement.parentElement
      .parentElement.swiper;
    this.acSwiper = null;
    !this.props.isSmallScreen && this.props.enableMousewheel(pageSwiper);
  }

  render() {
    const params = {
      autoHeight: true,
      slideActiveClass: "swiper-slide-active ac-slide-active",
      loop: true,
      mousewheel: true,
      speed: timing * 1000,
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      breakpointsInverse: true,
      breakpoints: {
        1200: {
          autoHeight: false
        }
      },
      pagination: {
        el:
          ".swiper-pagination.customized-swiper-pagination.swiper-pagination-nested",
        clickable: true
      },
      on: {
        init: () => {
          this.acSwiper = ReactDOM.findDOMNode(this).swiper;
        },
        transitionEnd: () => {
          TweenLite.to(window, 1, {
            scrollTo: {
              y: `#${this.props.dataHistorySubmenu.slug}`,
              offsetY: 110
            }
          });
        },
        slideNextTransitionStart: () => {
          this.activeSection = ReactDOM.findDOMNode(
            this
          ).getElementsByClassName("ac-slide-active")[0];
          this.header = this.activeSection.getElementsByClassName("heading")[0];
          this.bar1 = this.header.getElementsByClassName("bar-1")[0];

          this.leftAnimation = this.activeSection.getElementsByClassName(
            "left-animation"
          )[0];
          this.rightAnimation = this.activeSection.getElementsByClassName(
            "right-animation"
          )[0];

          if (
            this.leftAnimation !== undefined ||
            this.rightAnimation !== undefined
          ) {
            let tl = new TimelineLite();
            tl.to(this.bar1, timing / 2, { width: "110%" })

              .fromTo(
                this.leftAnimation,
                timing,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1 },
                `-=${timing}`
              )

              .fromTo(
                this.rightAnimation,
                timing,
                { x: 100, opacity: 0 },
                { x: 0, opacity: 1 },
                `-=${timing}`
              )
              .to(this.bar1, timing / 3, { width: "0%" });
          }
        },
        slidePrevTransitionStart: () => {
          this.activeSection = ReactDOM.findDOMNode(
            this
          ).getElementsByClassName("ac-slide-active")[0];
          this.header = this.activeSection.getElementsByClassName("heading")[0];

          this.bar1 = this.header.getElementsByClassName("bar-1")[0];

          this.leftAnimation = this.activeSection.getElementsByClassName(
            "left-animation"
          )[0];
          this.rightAnimation = this.activeSection.getElementsByClassName(
            "right-animation"
          )[0];

          if (
            this.leftAnimation !== undefined ||
            this.rightAnimation !== undefined
          ) {
            let tl = new TimelineLite();
            tl.to(this.bar1, timing / 2, { width: "110%" })

              // .fromTo(
              //   this.header,
              //   timing,
              //   { x: -100, opacity: 0 },
              //   { x: 0, opacity: 1 }
              // )
              .fromTo(
                this.leftAnimation,
                timing,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1 },
                `-=${timing}`
              );

            if (this.rightAnimation !== undefined) {
              tl.fromTo(
                this.rightAnimation,
                timing,
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1 },
                `-=${timing}`
              );
            }
            tl.to(this.bar1, timing / 3, { width: "0%" });
          }
        },
        reachEnd: () => {
          !this.props.isSmallScreen &&
            this.props.enableMousewheel(this.pageSwiper);
        },
        reachBeginning: () => {
          !this.props.isSmallScreen &&
            this.props.enableMousewheel(this.pageSwiper);
        }
      }
    };

    return (
      <div className="content-wrapper" id={this.props.dataHistorySubmenu.slug}>
        <Swiper {...params}>
          <div>
            <Row noGutters className="slide-1">
              <Col xs={12} md={6}>
                <h2 className="heading">
                  <div className="bar-1" /> Klimatyzacja
                </h2>
                <div className="left-animation">
                  <h3 className="subheading">Po co montować klimatyzację?</h3>
                  <p className="paragraph">
                    Coraz większą uwagę przykładamy do komfortu, w jakim
                    pracujemy bądź spędzamy czas w domu. Dwoma najważniejszymi
                    czynnikami wpływającymi na komfort cieplny człowieka jest
                    zachowana na odpowiednim poziomie temperatura oraz
                    wilgotność otoczenia. Za pomocą urządzeń klimatyzacyjnych
                    możemy kontrolować te zmienne na tyle, aby ich wartość były
                    dokładnie dopasowane do naszego organizmu.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} className="right-animation align-self-center">
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
          </div>
          <div>
            <Row noGutters className="slide-2">
              <Col xs={12} md={6}>
                <h2 className="heading">
                  <div className="bar-1" /> Klimatyzacja
                </h2>
                <div className="left-animation">
                  <h3 className="subheading">Jak działa klimatyzacja?</h3>
                  <p className="paragraph">
                    Czynnik chłodniczy, jako chłodna ciecz, dostaje się do
                    wymiennika ciepła wewnątrz pomieszczenia (parownik). Pod
                    wpływem działania wentylatora, ciepłe powietrze pobierane
                    jest z pomieszczenia. W tym samym czasie przechodzi ono
                    przez parownik, w którym zachodzi zjawisko odparowania,
                    polegające na odebraniu energii cieplnej przez czynnik,
                    będący w tym czasie w wymienniku, czego produktem „ubocznym”
                    jest schłodzone powietrze.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} className="right-animation align-self-center">
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
          </div>
          <div>
            {" "}
            <Row noGutters className="slide-3">
              <Col xs={12} md={6}>
                <h2 className="heading">
                  <div className="bar-1" /> Klimatyzacja
                </h2>
                <div className="left-animation">
                  <h3 className="subheading">
                    Najczęściej stosowane rozwiązania w domach
                  </h3>
                  <p className="paragraph">
                    Najczęściej stosowane rozwiązania w domkach jednorodzinnych
                    lub mieszkaniach określane są jako układy SPLIT i
                    MULTISPLIT.
                  </p>
                  <ul>
                    <li>
                      <span className="font-weight-800 text-red">SPLIT</span> –
                      układ, w którym jedna jednostka zewnętrzna połączona jest
                      z jedną jednostką wewnętrzną.
                    </li>

                    <li>
                      <span className="font-weight-800 text-red">
                        MULTISPLIT
                      </span>{" "}
                      – układ, w którym jedna jednostka zewnętrzna może
                      obsługiwać od 2 do 8 jednostek wewnętrznych. Doskonale
                      sprawdza się w sytuacji, w której chcemy zapewnić
                      klimatyzację dla każdego pomieszczenia w budynku.
                    </li>
                  </ul>
                  <p className="paragraph">
                    Najczęściej spotykanymi modelami są jednostki ścienne oraz
                    jednostki kasetonowe.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} className="right-animation align-self-center">
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
          </div>
        </Swiper>
        {this.props.isSmallScreen && (
          <button
            className="button"
            onClick={() => this.props.showSubpage(1)}
            style={{ margin: "10px auto 0 auto" }}
          >
            <div className="button-chevron reversed" />
            Powrót
          </button>
        )}
      </div>
    );
  }
}
