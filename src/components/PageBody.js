import React, { Component } from "react";
import Swiper from "react-id-swiper";
import HomePage from "./HomePage";
import About from "./About";
import Offer from "./Offer";
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
    const params = {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      effect: "fade",
      allowSlideNext: false,
      on: {
        observerUpdate: () => {
          console.log(
            this.state.swiper !== null ? this.state.swiper.activeIndex : ""
          );
        }
      }
      // effect: 'fade',
    };
    return (
      // <Swiper
      //   {...params}
      //   ref={node => (node ? (this.swiper = node.swiper) : null)}
      // >

      <div style={{ width: "100%", height: "100%" }}>
        <HomePage />
        <About />
        <Offer mainMenu={this.props.mainMenu}/>
      </div>

      // </Swiper>
    );
  }
}
