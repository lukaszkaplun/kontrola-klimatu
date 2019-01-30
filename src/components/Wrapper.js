import Swiper from "react-id-swiper";
import ReactDOM from "react-dom";
import React from "react";
import PageBody from "./PageBody";
import {  TimelineLite } from "gsap";

const timing = 1;
export default class Wrapper extends React.PureComponent {
  render() {
  

    this.swiperParams = {
     
      direction: "vertical",
      slideActiveClass: "swiper-slide-active main-slide-active",
      history: {
        replaceState: true,
        key: ""
      },
      preventInteractionOnTransition: true,
      speed: timing * 1000,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },

      // allowTouchMove: false,
      effect: "fade",
      observer: true,
      fadeEffect: {
        crossFade: true
      },
      preventClick: true,
      preventClicksPropagation: true,
      slidesPerView: 1,
      mousewheel: true,
      breakpointsInverse: true,

      on: {
        init: () => {
          this.pageSwiper = ReactDOM.findDOMNode(this).swiper;
          this.activeSection = ReactDOM.findDOMNode(
            this
          ).getElementsByClassName("main-slide-active")[0];
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
        },
       
        
        slideNextTransitionStart: () => {
          this.activeSection = ReactDOM.findDOMNode(
            this
          ).getElementsByClassName("main-slide-active")[0];
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
          } else {
            let tl = new TimelineLite();
            tl.to(this.bar1, timing, { width: "110%" }).to(
              this.bar1,
              timing / 2,
              { width: "0%" }
            );
          }
        },
        slidePrevTransitionStart: () => {
          this.activeSection = ReactDOM.findDOMNode(
            this
          ).getElementsByClassName("main-slide-active")[0];
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
          } else {
            let tl = new TimelineLite();
            tl.to(this.bar1, timing, { width: "110%" });
            tl.to(this.bar1, timing / 2, { width: "0%" });
          }
        },
             slideChange: () => {
          this.props.setActiveIndex(this.pageSwiper.activeIndex);
         

          if(this.props.activeIndex !== 2 && this.props.activeSubpageIndex !== null) {
          this.props.showSubpage( this.props.activeSubpageIndex)
          }
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
              activeSubpageIndex={this.props.activeSubpageIndex}
              updateScrollPosition={this.props.updateScrollPosition}
              visible={this.props.visible}
              mainMenu={this.props.mainMenu}
              isSmallScreen={this.props.isSmallScreen}
            />
          </Swiper>
        )}
        {this.props.isSmallScreen  && (
          <div style={{ width: "100%", height: "100%", marginTop: "110px" }}>
            <PageBody
              isMobile={this.props.isMobile}
              enableFloatingIcon={this.props.enableFloatingIcon}
              disableFloatingIcon={this.props.disableFloatingIcon}
              scrollEnabled={this.props.scrollEnabled}
              updateHistory={this.props.updateHistory}
              showSubpage={this.props.showSubpage}
              subpage={this.props.subpage}
              toggleCollapse={this.props.toggleCollapse}
              collapse={this.props.collapse}
              setActiveSubpageIndex={this.props.setActiveSubpageIndex}
              activeSubpageIndex={this.props.activeSubpageIndex}
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
