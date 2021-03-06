import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import slide1 from "../img/pump/slide1.png";
import slide2 from "../img/pump/slide2.png";
import slide3 from "../img/pump/slide3.png";
import slide4 from "../img/pump/slide4.png";
import slide5 from "../img/pump/slide5.png";
import slide6 from "../img/pump/slide6.png";
import Swiper from "react-id-swiper";
export default class Pump extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.pumpRef = null;

    this.setRef = node => {
      if (!this.props.isSmallScreen) {
        this.pumpRef = node.swiper;
      } else {
        this.pumpRef = null;
      }
    };
  }
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const params = {
      autoHeight: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    };

    return (
      <section className={" swiper-slide single-slide subpage"}>
        <div className="content-wrapper">
          <h2 className="heading">Pompy ciepła</h2>

          <Swiper {...params} ref={this.setRef}>
            <Row noGutters className="slide-1">
              <Col xs={12} md={6}>
                <h3 className="subheading">Co zyskujemy?</h3>
                <ul>
                  <li>
                    <span>Przyjazne </span> środowisku ogrzewanie bez oleju,
                    gazu czy węgla
                  </li>
                  <li>
                    <span>Bezobsługowość</span> systemu grzewczego - Pompa
                    ciepła pracuje całkowicie automatycznie. Nie wymaga
                    zewnętrznej ingerencji w postaci uzupełniania paliwa. Nie
                    trzeba się troszczyć o termin wizyty kominiarza czy
                    serwisanta kotła
                  </li>
                  <li>
                    <span>Oszczędność</span> miejsca – nie trzeba wydzielać
                    pomieszczenia kotłowni, moduł wewnętrzny pompy ciepła może
                    być umieszczony np. w kuchni
                  </li>
                  <li>
                    <span>Niższe</span> koszty inwestycyjne w przypadku budowy
                    nowego domu – nie trzeba budować komina.
                  </li>
                  <li>
                    <span>Nie</span> wytwarza płomieni co za tym idzie nie
                    stanowi zagrożenia pożarowego.
                  </li>
                </ul>
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
                <h3 className="subheading">Zasada działania</h3>
                <p className="paragraph">
                  Pompa ciepła dostarczy ciepło zarówno na potrzeby centralnego
                  ogrzewania jak i ciepłej wody użytkowej. Urządzenie do pracy
                  wykorzystuje ten sam układ chłodniczy co potocznie zwany
                  klimatyzator.
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
                <h3 className="subheading">Typy pomp ciepła</h3>
                <ul>
                  <li>
                    <span className="font-weight-800 text-red">
                      POMPA CIEPŁA TYPU SPLIT
                    </span>{" "}
                    - poszczególne komponenty rozdzielone są na dwie jednostki,
                    które połączone są ze sobą układem chłodniczym. W jednostce
                    zewnętrznej <strong>(1)</strong> znajduje się parownik{" "}
                    <strong>(4)</strong> w formie lamelowego wymiennika,
                    wentylator, sprężarka <strong>(3)</strong>, zawór 4-drogowy{" "}
                    <strong>(6)</strong> oraz zawór rozpręży{" "}
                    <strong>(5)</strong>. Natomiast w jednostce wewnętrznej{" "}
                    <strong>(2)</strong> umieszczony jest parownik{" "}
                    <strong>(7)</strong> w formie płytowego wymiennika, pompa
                    obiegowa <strong>(8)</strong>, grzałka elektryczna{" "}
                    <strong>(9)</strong> oraz zawór trójdrogowy{" "}
                    <strong>(10)</strong>.
                  </li>
                </ul>
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
            <Row noGutters className="slide-4">
              <Col xs={12} md={6}>
                <h3 className="subheading">Typy pomp ciepła</h3>
                <ul>
                  <li>
                    <span className="font-weight-800 text-red">
                      POMPA CIEPŁA TYPU MONOBLOK
                    </span>{" "}
                    - Wszystkie elementy układu chłodniczego takie jak:
                    sprężarka <strong>(2)</strong>, parownik{" "}
                    <strong>(3)</strong>, zawór rozprężny <strong>(4)</strong>,
                    zawór 4-drogowy <strong>(5)</strong> i skraplacz{" "}
                    <strong>(6)</strong> umieszczone są w jednostce zewnętrznej{" "}
                    <strong>(1)</strong>. Urządzenie z instalacją grzewczą
                    połączone jest w sposób hydrauliczny gdzie czynnikiem
                    roboczym jest roztwór glikolowy.
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={6} className="align-self-center">
                <div
                  className="image-wrapper"
                  style={{
                    backgroundImage: `url(${slide4})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover"
                  }}
                />
              </Col>
            </Row>
            <Row noGutters className="slide-5">
              <Col xs={12} md={6}>
                <h3 className="subheading">COP - co to takiego?</h3>
                <ul>
                  <li>
                    <span className="font-weight-800 text-red">COP</span>{" "}
                    <span className="font-weight-800 text-red">
                      – z j. ang Coefficient of Performance
                    </span>
                    , w wolnym tłumaczeniu –{" "}
                    <strong>Współczynnik wydajności</strong>. Jest to stosunek
                    mocy grzewczej do energii elektrycznej pobranej przez
                    urządzenie do pracy w określonych przez producenta warunkach
                    temperaturowych. Producenci pomp ciepła typu powietrze/woda
                    są zobowiązani aby dla swoich produktów podawać wartość COP
                    dla parametrów A7W35 i A2W35. Oznacza to, że podawane COP
                    dotyczy temperatury powietrza zewnętrznego{" "}
                    <strong>(A)</strong> na poziomie 7 lub 2 stopni Celsjusza, a
                    temperatura wody w instalacji grzewczej <strong>(W)</strong>{" "}
                    35 stopni Celsjusza.
                  </li>
                </ul>
                <p className="paragraph">
                  <strong>Przykład:</strong> Gdy producent podaje, że
                  współczynnik COP dla danego urządzenia wynosi 5 oznacza to, że
                  dla budynku w którym zapotrzebowanie na ciepło wynosi około 10
                  kW, 8 kW pokryte jest z tzw. Energii odnawialnej. a 2 kW z
                  energii elektrycznej.
                </p>
              </Col>
              <Col xs={12} md={6} className="align-self-center">
                <div
                  className="image-wrapper"
                  style={{
                    backgroundImage: `url(${slide5})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover"
                  }}
                />
              </Col>
            </Row>
            <Row noGutters className="slide-6">
              <Col xs={12} md={6}>
                <h3 className="subheading">
                  Jaka instalacja c.o. do pompy ciepła?
                </h3>

                <p className="paragraph">
                  Pompa ciepła to urządzenie które z założenia ma pracować
                  energooszczędnie. Krótko mówiąc, im niższą temperaturę musimy
                  zadać wodzie krążącej w instalacji tym pompa ciepła będzie
                  pracować efektywniej. Biorąc pod uwagę dzisiejsze trendy w
                  dziedzinie instalacji c.o. czynnik o najniżej temperaturze
                  prawie zawsze wykorzystywany jest w przypadku ogrzewania
                  podłogowego. Taki typ instalacji zastosowany w całym domu jest
                  najbardziej ekonomicznym rozwiązaniem z eksploatacyjnego
                  punktu widzenia.
                </p>
              </Col>
              <Col xs={12} md={6} className="align-self-center">
                <div
                  className="image-wrapper"
                  style={{
                    backgroundImage: `url(${slide6})`,
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
