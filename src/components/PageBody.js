import React, { Component } from "react";
// import Swiper from "react-id-swiper";
import HomePage from "./HomePage";
import About from "./About";
import Offer from "./Offer";
import Certificates from "./Certificates";
import Gallery from "./Gallery";
import Contact from "./Contact";
import AC from "./AC";
export default class PageBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiper: null
    };
  }

  componentDidMount() {
    this.setState({ swiper: this.swiper });
  }
  render() {
    // const params = {
     
    //   direction: 'vertical',
    //   slidesPerView: 'auto',
    //   freeMode: true,
    //   mousewheel: true,
    //   history: {
    //     key: 'slide',
    //   },
    //   // slidesPerView: 1,
    //   // spaceBetween: 0,
    //   // mousewheel: true,
    //   // effect: "fade",
    //   // allowSlideNext: false,
    //   // on: {
    //   //   observerUpdate: () => {
    //   //     console.log(
    //   //       this.state.swiper !== null ? this.state.swiper.activeIndex : ""
    //   //     );
    //   //   }
    //   // }
    //   // effect: 'fade',
    // };
    return (
      // <Swiper
      //   {...params}
      //   ref={node => (node ? (this.swiper = node.swiper) : null)}
      // >
        <div style={{ width: "100%", height: "100%", marginTop: "110px" }}>
          <HomePage  dataHistory={this.props.mainMenu[0].name}/>
          <About dataHistory={this.props.mainMenu[1].name}/>
          <Offer mainMenu={this.props.mainMenu}  dataHistory={this.props.mainMenu[2].name}/>
          <AC/>
          <Certificates isSmallScreen={this.props.isSmallScreen} mainMenu={this.props.mainMenu}  dataHistory={this.props.mainMenu[3].name}/>
          <Gallery isSmallScreen={this.props.isSmallScreen} mainMenu={this.props.mainMenu}  dataHistory={this.props.mainMenu[4].name}/>
          <Contact mainMenu={this.props.mainMenu}  dataHistory={this.props.mainMenu[5].name}/>
        </div>
      // </Swiper>
    );
  }
}
