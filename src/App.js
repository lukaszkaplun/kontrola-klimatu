import React, { Component } from "react";
// import scrollToElement from "scroll-to-element";
import ReactDOM from "react-dom";
import "normalize.css";
import Wrapper from "./components/Wrapper";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import youtube from "./img/youtube.svg";
import pinterest from "./img/pinterest.svg";
import instagram from "./img/instagram.svg";
import facebook from "./img/facebook.svg";
import dyplom from "./img/certificates/dyplom.png";
import herz from "./img/certificates/herz.png";
import venture from "./img/certificates/venture.png";
import zehnder from "./img/certificates/zehnder.png";

import gallery1 from "./img/gallery/1.png";
import gallery2 from "./img/gallery/2.png";
import gallery3 from "./img/gallery/3.png";
import gallery4 from "./img/gallery/4.png";

import { TweenLite, TimelineLite, TimelineMax } from "gsap";
import { ScrollToPlugin } from "gsap/all";

import { clearAllBodyScrollLocks } from "body-scroll-lock";
import FloatingIcon from "./components/FloatingIcon";
import LoadingScreen from "./components/LoadingScreen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMousewheelEnabled: true,
      shouldCheckSize: true,
      isLoadingScreen: true,
      isBlocked: false,
      enableFloatingIcon: true,
      scrollEnabled: false,
      subpage: null,
      collapse: null,
      visible: false,
      activeIndex: 0,
      activeSubpageIndex: null,
      isMobile: false,
      isSmallScreen: null,
      isMenuOpen: false,
      mainMenu: [
        { name: "witaj", submenu: null, slug: "witaj" },
        { name: "kim jesteśmy?", submenu: null, slug: "kim-jestesmy" },
        {
          name: "nasza oferta",
          slug: "oferta",
          // submenu: null
          submenu: [
            {
              slug: "rekuperacja",
              name: "rekuperacja",
              content: {
                heading: "Niezawodna klimatyzacja",
                body: `Wykonujemy projekty oraz montujemy układy wentylacji mechanicznej zwanej rekuperacją dla domów jednorodzinnych. Dobierzemy odpowiedni układ z uwzględnieniem kubatury budynku jak i użytych materiałów budowlanych.`,
                buttonCopy: "Dowiedz się więcej"
              }
            },
            {
              name: "klimatyzacja",
              slug: "klimatyzacja",
              content: {
                heading: "Solidna wentylacja",
                body: `Zapewniamy profesjonalny montaż oraz szybki serwis. W naszej ofercie znajdziesz urządzenia renomowanych marek które sprawdzą się w różnych pomieszczeniach. Oferujemy klimatyzatory typu Split i Multi Split. Wszystkie urządzenia są wydajne, energooszczędne oraz proste w obsłudze.`,
                buttonCopy: "Dowiedz się więcej"
              }
            },
            {
              name: "pompy powietrza",
              slug: "pompy-powietrza",
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
          slug: "certyfikaty",
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
          slug: "galeria",
          submenu: null,
          gallery: [
            { src: gallery1, alt: "gallery1" },
            { src: gallery2, alt: "gallery2" },
            { src: gallery3, alt: "gallery3" },
            { src: gallery4, alt: "gallery4" }
          ]
        },
        { name: "kontakt", submenu: null, slug: "kontakt" }
      ],
      socialMenu: [
        { name: "youtube", icon: youtube, address: "" },
        { name: "pinterest", icon: pinterest, address: "" },
        { name: "instagram", icon: instagram, address: "" },
        { name: "facebook", icon: facebook, address: "" }
      ]
    };
    this.pageSwiper = null;
  }
  showSubpage = number => {
    if (this.state.subpage === number) {
      if (this.state.isSmallScreen) {
        this.updateHistory(this.state.mainMenu[2].slug);
        this.setState(
          {
            subpage: null,
            collapse: null,
            activeSubpageIndex: null,
            activeIndex: 2
          },
          () => {
            TweenLite.to(window, 1, {
              scrollTo: { y: `#${this.state.mainMenu[2].slug}`, offsetY: 110 }
            });
          }
        );
      }
    } else {
      this.setState({ subpage: number });

      if (this.state.isSmallScreen) {
        this.updateHistory(this.state.mainMenu[2].submenu[number].slug);
      } else {
        this.updateHistory(this.state.mainMenu[2].submenu[number].slug);
      }
    }
  };

  disableMousewheel = (swiper) => {
if (swiper !== null && swiper !== undefined) {
  swiper.mousewheel.disable();
}

   
  };
  enableMousewheel = (swiper) => {
    if (swiper !== null && swiper !== undefined) {
      swiper.mousewheel.enable();
    }
  };

  disableLoadingScreen = () => {
    this.setState({ isLoadingScreen: false });
    // enableBodyScroll(ReactDOM.findDOMNode(this));
  };
  handleBlocked = () => {
    this.setState({ isBlocked: true });
  };

  toggleCollapse = (number, event) => {
    //   event.stopPropagation();
    //   event.preventDefault();
    //   if(!this.state.isBlocked) {
    //     this.handleBlocked()
    //   }
    //  console.log(number)
    //   if (this.state.collapse === number) {
    //     this.setState({ collapse: null });
    //   } else {
    //     this.setState({ collapse: number });
    //   }
  };

  updateHistory = slug => {
    window.history.pushState(null, null, slug);
  };

  restoreScrollPosition = () => {
    let slugArr = [];
    this.state.mainMenu.map(item => {
      if (item.submenu !== null) {
        item.submenu.map(subitem => {
          slugArr.push(subitem.slug);
        });
      }
      slugArr.push(item.slug);
    });
    var pathArray = window.location.pathname.split("/");
    var slug = pathArray[1];

    if (this.state.isSmallScreen) {
      setTimeout(() => {
        window.scrollTo(0, 0);
        var tl = new TimelineLite({
          onComplete: () => {
            this.setState({ scrollEnabled: false });
          }
        });
        var pathArray = window.location.pathname.split("/");
        var slug = pathArray[1];
        if (slug.length !== 0 && slugArr.indexOf(slug) !== -1) {
          if (
            slug !== this.state.mainMenu[2].submenu[0].slug ||
            slug !== this.state.mainMenu[2].submenu[1].slug ||
            slug !== this.state.mainMenu[2].submenu[2].slug
          ) {
            this.setState({ scrollEnabled: true }, () => {
              if (this.state.scrollEnabled) {
                this.updateHistory(slug);
                tl.to(window, 1, {
                  scrollTo: { y: `#${slug}`, offsetY: 110 }
                });
              }
            });
          }

          if (slug === this.state.mainMenu[2].submenu[0].slug) {
            this.showSubpage(0);
          }
          if (slug === this.state.mainMenu[2].submenu[1].slug) {
            this.showSubpage(1);
          }
          if (slug === this.state.mainMenu[2].submenu[2].slug) {
            this.showSubpage(2);
          }

          if (slug === this.state.mainMenu[5].slug) {
            this.setState({ enableFloatingIcon: false });
          }
        }
      }, 400);
    } else {
      this.pageSwiper = ReactDOM.findDOMNode(this).getElementsByClassName(
        "main-swiper"
      )[0].swiper;

      if (slug === this.state.mainMenu[2].submenu[0].slug) {
        this.pageSwiper.slideTo(2, 1000, false);
        this.showSubpage(0);
      }
      if (slug === this.state.mainMenu[2].submenu[1].slug) {
        this.pageSwiper.slideTo(2, 1000, false);
        this.showSubpage(1);
      }
      if (slug === this.state.mainMenu[2].submenu[2].slug) {
        this.pageSwiper.slideTo(2, 1000, false);
        this.showSubpage(2);
      }
    }
  };

  handleOpenMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen }, () => {
      // this.state.isMenuOpen
      //   ? disableBodyScroll(ReactDOM.findDOMNode(this))
      //   : enableBodyScroll(ReactDOM.findDOMNode(this));
    });
  };

  handleClick = () => {
    setTimeout(() => {
      var tl = new TimelineLite({
        onComplete: () => {
          this.setState({ scrollEnabled: false, enableFloatingIcon: false });
        }
      });
      this.setState({ scrollEnabled: true }, () => {
        if (this.state.scrollEnabled) {
          this.updateHistory("kontakt");
          tl.to(window, 1, {
            scrollTo: { y: `#kontakt`, offsetY: 0 }
          });
        }
      });
    }, 400);
  };

  handleCloseMenu = (index, subindex = null) => {
    console.log(index);
    this.setState({ isMenuOpen: false, scrollEnabled: true }, () => {
      // enableBodyScroll(ReactDOM.findDOMNode(this));

      var tl = new TimelineLite({
        onComplete: () => {
          this.setState({ scrollEnabled: false });
        }
      });

      if (index === 5) {
        this.setState({ enableFloatingIcon: false });
      }

      if (subindex === null) {
        this.setState({
          subpage: null,
          collapse: null,
          activeSubpageIndex: null
        });
        this.updateHistory(this.state.mainMenu[index].slug);
        tl.to(window, 1, {
          scrollTo: { y: `#${this.state.mainMenu[index].slug}`, offsetY: 110 }
        });
      } else {
        var pathArray = window.location.pathname.split("/");
        var slug = pathArray[1];
        if (slug !== this.state.mainMenu[index].submenu[subindex].slug) {
          this.showSubpage(subindex);
        }

        this.updateHistory(this.state.mainMenu[index].submenu[subindex].slug);
        tl.to(window, 1, {
          scrollTo: {
            y: `#${this.state.mainMenu[index].submenu[subindex].slug}`,
            offsetY: 110
          }
        });
      }
    });
  };
  handleMenu = (index, event) => {
    event.stopPropagation();

    if (!this.state.isSmallScreen) {
      this.pageSwiper = ReactDOM.findDOMNode(this).getElementsByClassName(
        "main-swiper"
      )[0].swiper;

      this.pageSwiper.slideTo(index, 1000, true);

      if (index === 2 && this.state.activeSubpageIndex !== null) {
        const timing = 1;
        setTimeout(() => {
          this.activeSection = document.getElementById("oferta");
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
            tl.to(this.header, timing, { opacity: 1 }, `-=${timing}`)

              .fromTo(
                this.leftAnimation,
                timing,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1 },
                `-=${timing}`
              )
              .to(this.bar1, timing, { width: "110%" })
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
          } else {
            let tl = new TimelineLite();
            tl.to(this.bar1, timing, { width: "110%" });
            tl.to(this.bar1, timing / 2, { width: "0%" });
          }
        }, 200);
      }
    }

    this.setState({
      activeIndex: this.pageSwiper.activeIndex,
      subpage: null,
      collapse: null,
      activeSubpageIndex: null
    });
  };



clearSubpages = () => {
  this.setState({
    subpage: null,
    collapse: null,
    activeSubpageIndex: null
  });
}


  setActiveIndex = index => {
    this.setState({
      activeIndex: index
      // subpage: null,
      // collapse: null,
      // activeSubpageIndex: null
    });
  };

  setActiveSubpageIndex = (swiper, index) => {
    this.setState({ activeSubpageIndex: index });

    if (!this.state.isSmallScreen) {
      this.pageSwiper = ReactDOM.findDOMNode(this).getElementsByClassName(
        "main-swiper"
      )[0].swiper;
    }
  };

  enableFloatingIcon = () => {
    this.setState({ enableFloatingIcon: true });
  };
  disableFloatingIcon = () => {
    this.setState({ enableFloatingIcon: false });
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
    //   this.setState({
    //     isMobile: true
    //   },()=>{ document.body.classList.add('mobile')});
    // } else {
    //   this.setState({
    //     isMobile: false
    //   },()=>{ document.body.classList.remove('mobile')});
    // }
  };
  handleSmallScreen = () => {
    let initialValue = this.state.isSmallScreen;

    if (window.innerWidth <= 1199) {
      this.setState(
        {
          isSmallScreen: true
        },
        () => {
          if (initialValue !== this.state.isSmallScreen) {
            this.restoreScrollPosition();
          }
        }
      );
    } else if (window.innerWidth >= 1200) {
      this.setState(
        {
          isSmallScreen: false
        },
        () => {
          if (initialValue !== this.state.isSmallScreen) {
            this.restoreScrollPosition();
          }
        }
      );
    }
  };

  componentDidMount() {
    const plugins = [ScrollToPlugin];

    this.handleIsMobile();
    this.handleSmallScreen();
    window.addEventListener("resize", this.handleSmallScreen);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isSmallScreen !== this.state.isSmallScreen) {
      if (!this.state.isSmallScreen) {
        this.pageSwiper = ReactDOM.findDOMNode(this).getElementsByClassName(
          "main-swiper"
        )[0].swiper;

        this.setState({ activeIndex: this.pageSwiper.activeIndex });
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleSmallScreen);
    clearAllBodyScrollLocks();
  }

  render() {
    
    return (
      <div className="app-wrapper">
        {this.state.isLoadingScreen && (
          <LoadingScreen disableLoadingScreen={this.disableLoadingScreen} />
        )}

        <Header
          showSubpage={this.showSubpage}
          activeSubpageIndex={this.state.activeSubpageIndex}
          activeIndex={this.state.activeIndex}
          isMenuOpen={this.state.isMenuOpen}
          handleOpenMenu={this.handleOpenMenu}
          mainMenu={this.state.mainMenu}
          isMobile={this.state.isMobile}
          isSmallScreen={this.state.isSmallScreen}
          handleCloseMenu={this.handleCloseMenu}
          handleMenu={this.handleMenu}
        />

        <Wrapper
        clearSubpages= {this.clearSubpages}
          enableMousewheel={this.enableMousewheel}
          disableMousewheel={this.disableMousewheel}
          isMousewheelEnabled={this.state.isMousewheelEnabled}
          isMobile={this.state.isMobile}
          isBlocked={this.state.isBlocked}
          setActiveIndex={this.setActiveIndex}
          enableFloatingIcon={this.enableFloatingIcon}
          disableFloatingIcon={this.disableFloatingIcon}
          scrollEnabled={this.state.scrollEnabled}
          updateHistory={this.updateHistory}
          showSubpage={this.showSubpage}
          subpage={this.state.subpage}
          toggleCollapse={this.toggleCollapse}
          collapse={this.state.collapse}
          setActiveSubpageIndex={this.setActiveSubpageIndex}
          activeSubpageIndex={this.state.activeSubpageIndex}
          activeIndex={this.state.activeIndex}
          updateScrollPosition={this.updateScrollPosition}
          visible={this.state.visible}
          mainMenu={this.state.mainMenu}
          isSmallScreen={this.state.isSmallScreen}
        />

        {this.state.enableFloatingIcon && this.state.isSmallScreen && (
          <FloatingIcon handleClick={this.handleClick} />
        )}

        <Footer
          isMobile={this.state.isMobile}
          isSmallScreen={this.state.isSmallScreen}
          socialMenu={this.state.socialMenu}
        />
      </div>
    );
  }
}

export default App;
