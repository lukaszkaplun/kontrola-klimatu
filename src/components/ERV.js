import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "reactstrap";
import slide1 from "../img/erv/slide1.png";
import slide2 from "../img/erv/slide2.png";
import slide3 from "../img/erv/slide3.png";
import Swiper from "react-id-swiper";

import { TweenLite, TimelineLite } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
const timing = 1;
export default class ERV extends Component {
  constructor(props) {
    super(props);
    this.ervSwiper = null;
  }

  componentDidMount() {
    this.ervSwiper = ReactDOM.findDOMNode(this).getElementsByClassName(
      "swiper-container"
    )[0].swiper;
    if (this.ervSwiper !== null) {
      this.props.setActiveSubpageIndex(this.ervSwiper, 0);
    }
  }

  render() {
    const params = {
      autoHeight: true,
      slideActiveClass: "swiper-slide-active erv-slide-active",
      loop: true,
      on: {
        transitionEnd: () => {
          TweenLite.to(window, 1, {
            scrollTo: {
              y: `#${this.props.dataHistorySubmenu.slug}`,
              offsetY: 110
            }
          });
        }
      },
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
        el: ".swiper-pagination-nested",
        clickable: true
      },
      on: {
        init: () => {
          this.ervSwiper = ReactDOM.findDOMNode(this).swiper;
        },

        slideNextTransitionStart: () => {
          this.activeSection = ReactDOM.findDOMNode(
            this
          ).getElementsByClassName("erv-slide-active")[0];
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
            tl.to(this.bar1, timing, { width: "110%" })

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
              .to(this.bar1, timing / 2, { width: "0%" });
          }
        },
        slidePrevTransitionStart: () => {
          this.activeSection = ReactDOM.findDOMNode(
            this
          ).getElementsByClassName("erv-slide-active")[0];
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
            tl.to(this.bar1, timing, { width: "110%" })

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
            tl.to(this.bar1, timing / 2, { width: "0%" });
          }
        }
      }
    };

    return (
      <div className="content-wrapper" id={this.props.dataHistorySubmenu.slug}>
        <Swiper {...params}>
          <Row noGutters className="slide-1">
            <Col xs={12} md={6}>
              <h2 className="heading"> <div className="bar-1" />Rekuperacja</h2>
              <div className="left-animation">
              <h3 className="subheading">Jakie ma zalety?</h3>
              <ul>
                <li>
                  <span>Zapewnia </span>
                  stały dopływ świeżego powietrza niezależnie od pory roku
                </li>
                <li>
                  <span>W dużej </span>
                  mierze zapobiega utracie ciepła zużytego na ogrzanie powietrza
                  w budynku
                </li>
                <li>
                  <span>Niweluje </span>
                  problem powstawania pleśni i grzybów wewnątrz pomieszczeń,
                </li>
                <li>
                  <span>Doskonale </span>
                  sprawdza się w nowoczesnym (szczelnym) budownictwie, gdzie
                  wentylacja grawitacyjna nie spełnia swojej funkcji
                </li>
                <li>
                  <span>Dzięki </span>
                  zastosowaniu wentylacji mechanicznej z odzyskiem ciepła w celu
                  dostarczenia świeżego powietrza nie musimy otwierać okien
                  dzięki czemu unikamy przeciągów jak i hałasów dobiegających z
                  zewnątrz
                </li>
                <li>
                  <span>Dostarcza </span>
                  powietrze od którego poprzez filtry zostały odseparowane pyły
                  i drobnoustroje
                </li>
                <li>
                  <span>Usuwa </span>z pomieszczeń nieprzyjemne zapachy i
                  dwutlenek węgla
                </li>
              </ul>
            </div>
            </Col>
            <Col xs={12} md={6} className="right-animation">
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
              <h2 className="heading"> <div className="bar-1" />Rekuperacja</h2>

              <div className="left-animation">
              <h3 className="subheading">Co to takiego?</h3>
              <p className="paragraph">
                Rekuperacja to nic innego jak instalacja wentylacji mechanicznej
                z odzyskiem ciepła. Całość układu składa się z „serca” zwanego
                rekuperatorem oraz sieci kanałów doprowadzających świeże
                powietrze z zewnątrz do tzw. Pomieszczeń „czystych” (salon,
                sypialnia) oraz usuwających powietrze zużyte z pomieszczeń tzw.
                „brudnych” (toaleta, kuchnia). Instalacja rekuperacji pozwala na
                prawidłową wymianę powietrza w budynku przez cały rok. Zjawisko
                odzysku ciepła pozwala na odzyskanie energii cieplnej z zużytego
                powietrza, a co za tym idzie umożliwia znaczne obniżenie kosztów
                eksploatacyjnych.
              </p>
              </div>
            </Col>
            <Col xs={12} md={6} className="right-animation">
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
              <h2 className="heading"> <div className="bar-1" />Rekuperacja</h2>
              <div className="left-animation">
              <h3 className="subheading">Serce układu - rekuperator</h3>
              <p className="paragraph">
                Głównym elementem urządzenia jest wymiennik który odpowiedzialny
                jest za odzysk energii cieplnej. W celu wprowadzenia powietrza w
                ruch w obudowę urządzenia wbudowane są dwa wentylatory. Jeden
                odpowiedzialny jest za pobieranie świeżego powietrza z zewnątrz
                natomiast drugi za usuwanie zużytego. Filtry zainstalowane w
                urządzeniu chronią pomieszczenia oraz główny element urządzenia
                przed zanieczyszczeniami.
              </p>
              </div>
            </Col>
            <Col xs={12} md={6} className="right-animation">
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
        {this.props.isSmallScreen && (
          <button
            className="button"
            onClick={() => this.props.showSubpage(0)}
            style={{ margin: "0 auto" }}
          >
            <div className="button-chevron reversed" />
            Powrót
          </button>
        )}
      </div>
    );
  }
}
