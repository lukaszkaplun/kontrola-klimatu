import Swiper from "react-id-swiper";
import React from "react";
import PageBody from "./PageBody";
export default class Wrapper extends React.PureComponent {
  render() {
    this.swiperParams = {
      rebuildOnUpdate: true,
      direction: "vertical",

      history: {
        replaceState: true,
        key: ""
      },
      speed: 1000,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },

      allowTouchMove: false,
      effect: "fade",
      observer: true,
      fadeEffect: {
        crossFade: true
      },
      slidesPerView: 1,
      mousewheel: true,
      breakpointsInverse: true,
      on: {
        slideChangeTransitionStart: () => {
          // console.log();
        },
        progress: progress => {
          // console.log(progress);
        },
        slideNextTransitionStart: () => {
          // console.log("tesda");
        },

        slideChangeTransitionEnd: () => {
          // console.log("end");
          this.setState({
            visible: true
          });
        }
      }
    };
    return (
      <React.Fragment>
        {!this.props.isSmallScreen && (
          <Swiper
            containerClass="swiper-container main-swiper"
            {...this.swiperParams}
          >
            <PageBody
              enableFloatingIcon={this.props.enableFloatingIcon}
              disableFloatingIcon={this.props.disableFloatingIcon}
              scrollEnabled={this.props.scrollEnabled}
              updateHistory={this.props.updateHistory}
              showSubpage={this.props.showSubpage}
              subpage={this.props.subpage}
              toggleCollapse={this.props.toggleCollapse}
              collapse={this.props.collapse}
              setActiveSubpageIndex={this.props.setActiveSubpageIndex}
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
              enableFloatingIcon={this.props.enableFloatingIcon}
              disableFloatingIcon={this.props.disableFloatingIcon}
              scrollEnabled={this.props.scrollEnabled}
              updateHistory={this.props.updateHistory}
              showSubpage={this.props.showSubpage}
              subpage={this.props.subpage}
              toggleCollapse={this.props.toggleCollapse}
              collapse={this.props.collapse}
              setActiveSubpageIndex={this.props.setActiveSubpageIndex}
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
