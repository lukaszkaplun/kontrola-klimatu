import React, { Component } from "react";
import ReactDOM from "react-dom";
import "normalize.css";
// import Swiper from "react-id-swiper";
import Swiper from "swiper/dist/js/swiper.esm.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import youtube from "./img/youtube.svg";
import pinterest from "./img/pinterest.svg";
import instagram from "./img/instagram.svg";
import facebook from "./img/facebook.svg";
import PageBody from "./components/PageBody";

import dyplom from "./img/certificates/dyplom.png";
import herz from "./img/certificates/herz.png";
import venture from "./img/certificates/venture.png";
import zehnder from "./img/certificates/zehnder.png";

import gallery1 from "./img/gallery/architecture-building-driveway-186077.png";
import gallery2 from "./img/gallery/apartment-art-bright-1027516.png";
import gallery3 from "./img/gallery/apartment-architecture-bookcase-271795.png";
import gallery4 from "./img/gallery/adult-architect-architectural-design-1260309.png";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isSmallScreen: false,
      isMenuOpen: false,
      mainMenu: [
        { name: "home", submenu: null },
        { name: "kim jesteśmy?", submenu: null },
        {
          name: "nasza oferta",
          // submenu: null
          submenu: [
            {
              name: "rekuperacja",
              content: {
                heading: "Niezawodna klimatyzacja",
                body: `Wykonujemy projekty oraz montujemy układy wentylacji mechanicznej zwanej rekuperacją dla domów jednorodzinnych. Dobierzemy odpowiedni układ z uwzględnieniem kubatury budynku jak i użytych materiałów budowlanych.`,
                buttonCopy: "Dowiedz się więcej"
              }
            },
            {
              name: "klimatyzacja",
              content: {
                heading: "Solidna wentylacja",
                body: `Zapewniamy profesjonalny montaż oraz szybki serwis. W naszej ofercie znajdziesz urządzenia renomowanych marek które sprawdzą się w różnych pomieszczeniach. Oferujemy klimatyzatory typu Split i Multi Split. Wszystkie urządzenia są wydajne, energooszczędne oraz proste w obsłudze.`,
                buttonCopy: "Dowiedz się więcej"
              }
            },
            {
              name: "pompy powietrza typu powietrze - woda",
              content: {
                heading: "Energooszczędne ogrzewanie za pomocą pompy ciepła",
                body: `Instalacje centralnego ogrzewania z wykorzystaniem powietrznych pompy ciepła.  Każdy wykonany przez nas układ jest idealnie dopasowana do obsługującego budynku. Pomożemy Ci wybrać urządzenie, które zapewni ekonomiczne i wydajne ogrzewanie. Oferowane przez nas systemy mogą być instalowane w nowych oraz modernizowanych budynkach.`,
                buttonCopy: "Dowiedz się więcej"
              }
            }
          ]
        },
        {
          name: "certyfikaty",
          submenu: null,
          gallery: [
            { src: dyplom, alt: "dyplom" },
            { src: herz, alt: "hertz" },
            { src: venture, alt: "venture" },
            { src: zehnder, alt: "zehnder" }
          ]
        },
        {
          name: "galeria",
          submenu: null,
          gallery: [
            { src: gallery1, alt: "gallery1" },
            { src: gallery2, alt: "gallery2" },
            { src: gallery3, alt: "gallery3" },
            { src: gallery4, alt: "gallery4" }
          ]
        },
        { name: "kontakt", submenu: null }
      ],
      socialMenu: [
        { name: "youtube", icon: youtube, address: "" },
        { name: "pinterest", icon: pinterest, address: "" },
        { name: "instagram", icon: instagram, address: "" },
        { name: "facebook", icon: facebook, address: "" }
      ]
    };

    // if (!this.state.isSmallScreen) {
    // this.swiperRef = null;
    // this.setSwiperRef = node => {
    //   if (!this.state.isSmallScreen) {
    //     this.swiperRef = node.swiper;
    //   } else {
    //     this.swiperRef = null;
    //   }
    // };
    // }
  }

  handleOpenMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen }, () => {
      this.state.isMenuOpen
        ? disableBodyScroll(ReactDOM.findDOMNode(this))
        : enableBodyScroll(ReactDOM.findDOMNode(this));
    });
  };

  handleIsMobile = () => {
    // if (
    //   /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(
    //     navigator.userAgent || navigator.vendor || window.opera
    //   ) ||
    //   /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    //     (navigator.userAgent || navigator.vendor || window.opera).substr(0, 4)
    //   )
    // ) {
    //   this.setState(
    //     {
    //       isMobile: true
    //     }
    //     // () => {
    //     //   if (this.state.isMobile) {
    //     //     this.setState({
    //     //       isSmallScreen: true
    //     //     });
    //     //   }
    //     // }
    //   );
    // } else {
    //   this.setState({
    //     isMobile: false
    //   });
    // }
  };
  handleSmallScreen = () => {
    if (window.innerWidth <= 1199) {
      this.setState({
        isSmallScreen: true
      });
    } else if (window.innerWidth >= 1200) {
      this.setState({
        isSmallScreen: false
      });
      // this.swiperRef.destroy(false, true)
    }
  };
  componentDidMount() {
    console.log(window.location.href)
    // window.history.pushState("object or string", "Title", "http://examplesite.com/test.html?aa_campaign=f45632");
    window.history.pushState("page-2", "page 2", "about");
    console.log(ReactDOM.findDOMNode(this).getElementsByClassName("about")[0])
 document.getElementsByClassName("about")[0].scrollIntoView()
    // disableBodyScroll(ReactDOM.findDOMNode(this))
    this.handleIsMobile();
    this.handleSmallScreen();
    window.addEventListener("resize", this.handleSmallScreen);

    if (!this.state.isSmallScreen) {
      this.mySwiper = new Swiper(".page-slider", {
        direction: "vertical",
        effect:"fade",
        
        allowTouchMove: false,
        slidesPerView: 1,
        mousewheel: true,
        breakpointsInverse: true,
        on: {
          slideChangeTransitionStart: () => {
            console.log();
          }
        }
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.isSmallScreen &&
      ReactDOM.findDOMNode(this).getElementsByClassName("page-slider")[0] !==
        undefined
    ) {
      this.mySwiper = new Swiper(".page-slider", {
        direction: "vertical",
        allowTouchMove: false,
        slidesPerView: 1,
        mousewheel: true,
        breakpointsInverse: true,
        on: {
          slideChangeTransitionStart: () => {
            console.log();
          }
        }
      });
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleSmallScreen);
    clearAllBodyScrollLocks();
  }

  render() {
    return (
      <div className="app-wrapper">
        <Header
          isMenuOpen={this.state.isMenuOpen}
          handleOpenMenu={this.handleOpenMenu}
          mainMenu={this.state.mainMenu}
          isMobile={this.state.isMobile}
          isSmallScreen={this.state.isSmallScreen}
        />

        {this.state.isSmallScreen && (
          <div style={{ width: "100%", height: "100%", marginTop: "110px" }}>
            <PageBody
              mainMenu={this.state.mainMenu}
              isSmallScreen={this.state.isSmallScreen}
            />
          </div>
        )}

        {!this.state.isSmallScreen && (
          <div className="swiper-container page-slider">
            <div className="swiper-wrapper">
              <PageBody
                mainMenu={this.state.mainMenu}
                isSmallScreen={this.state.isSmallScreen}
              />
            </div>
            <div className="swiper-pagination" />
           
          </div>
        )}
        <Footer
          isSmallScreen={this.state.isSmallScreen}
          socialMenu={this.state.socialMenu}
        />
      </div>
    );
  }
}

export default App;
