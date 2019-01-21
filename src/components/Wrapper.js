import Swiper from "react-id-swiper";
import React from "react";
import PageBody from "./PageBody";
export default class Wrapper extends React.PureComponent {
  render() {
    this.swiperParams = {
      direction: "vertical",
      speed: 1000,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      },
      allowTouchMove: false,
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      slidesPerView: 1,
      mousewheel: true,
      breakpointsInverse: true,
      on: {
        slideChangeTransitionStart: () => {
          console.log();
        },
        progress: progress => {
          console.log(progress);
        },
        slideNextTransitionStart: () => {
          console.log("tesda");
        },
        slideChangeTransitionStart: () => {
          console.log("start");
        },
        slideChangeTransitionEnd: () => {
          console.log("end");
          this.setState({
            visible: true
          });
        }
      }
    };
    return (
      <React.Fragment>
        {!this.props.isSmallScreen && (
          <Swiper {...this.swiperParams}>
            <PageBody
              updateScrollPosition={this.props.updateScrollPosition}
              visible={this.props.visible}
              mainMenu={this.props.mainMenu}
              isSmallScreen={this.props.isSmallScreen}
            />
          </Swiper>
        )}
        {this.props.isSmallScreen && (
          <div style={{ width: "100%", height: "100%", marginTop: "110px" }}>
            <PageBody
              updateScrollPosition={this.props.updateScrollPosition}
              visible={this.props.visible}
              mainMenu={this.props.mainMenu}
              isSmallScreen={this.props.isSmallScreen}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}
