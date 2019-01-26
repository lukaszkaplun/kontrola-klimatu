import React, { Component } from "react";
import ReactDOM from "react-dom";
import Swiper from "react-id-swiper";
import Waypoint from "react-waypoint";
export default class Certificates extends Component {
  constructor(props) {
    super(props);

    this.gallerySwiper = null;
    this.thumbnailSwiper = null;
  }

  onLeave = ({ currentPosition }) => {
    this.props.enableFloatingIcon();
    if (currentPosition === Waypoint.above) {
      this.props.updateHistory(this.props.dataHistory);
    }
  };
  onEnter = ({ currentPosition }) => {
    this.props.enableFloatingIcon();
    var pathArray = window.location.pathname.split("/");
    var slug = pathArray[1];
    if (
      currentPosition === Waypoint.inside &&
      slug !== this.props.dataHistory
    ) {
      this.props.updateHistory(this.props.dataHistory);
    }
  };

  componentDidMount() {
    if (this.gallerySwiper !== null) {
      this.gallerySwiper.controller.control = this.thumbnailSwiper;
      this.thumbnailSwiper.controller.control = this.gallerySwiper;
    }

    this.thumbnailSwiper = ReactDOM.findDOMNode(this)
      .getElementsByClassName("gallery-thumbs-wrapper")[0]
      .getElementsByClassName("swiper-container")[0].swiper;
    this.gallerySwiper = ReactDOM.findDOMNode(this)
      .getElementsByClassName("gallery-wrapper")[0]
      .getElementsByClassName("swiper-container")[0].swiper;

    if (this.gallerySwiper !== null && this.thumbnailSwiper !== null) {
      this.gallerySwiper.controller.control = this.thumbnailSwiper;
      this.thumbnailSwiper.controller.control = this.gallerySwiper;
    }
  }
  render() {
    const paramsThumb = {
      spaceBetween: 20,
      slidesPerView: 4,
      loop: true,
      // freeMode: true,
      touchRatio: 0.2,
      loopedSlides: 4,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      centeredSlides: true
      // autoHeight:true
    };
    const params = {
      direction: "horizontal",
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: true,
      loopedSlides: 4,
      loop: true,
      // initialSlide: 0,
      autoplay: true,

      breakpointsInverse: true,
      breakpoints: {
        1200: {
          centeredSlides: true,
          spaceBetween: 0,
          slidesPerView: 1,
          autoplay: false
        }
      }
    };

    return (
      <section
        id={this.props.dataHistory}
        data-history={this.props.dataHistory}
        className={" swiper-slide single-slide certificates"}
      >
        {!this.props.scrollEnabled && this.props.isSmallScreen && (
          <Waypoint onLeave={this.onLeave} scrollableAncestor={window}>
            <div
              style={{
                width: "10px",
                position: "absolute",
                top: "-110px",
                left: "0px",
                height: "1px",
                background: "transparent"
              }}
            />
          </Waypoint>
        )}

        {!this.props.scrollEnabled && this.props.isSmallScreen && (
          <Waypoint onEnter={this.onEnter} scrollableAncestor={window}>
            <div
              style={{
                width: "10px",
                position: "absolute",
                top: "50%",
                left: "0px",
                height: "10px",
                background: "transparent"
              }}
            />
          </Waypoint>
        )}
        <div className="content-wrapper">
          <h2 className="heading">
            {" "}
            <div className="bar-1" />
            Certyfikaty
          </h2>
          <div className="gallery-wrapper">
            <Swiper {...params}>
              {this.props.mainMenu[3].gallery.map((photo, index) => {
                return (
                  <div
                    className={
                      this.props.isSmallScreen
                        ? "swiper-slide mobile"
                        : "swiper-slide"
                    }
                    key={index}
                    // style={{
                    //   backgroundImage: !this.props.isSmallScreen
                    //     ? `url(${photo.src})`
                    //     : null,
                    //   backgroundPosition: !this.props.isSmallScreen
                    //     ? "center center"
                    //     : null,
                    //   backgroundSize: !this.props.isSmallScreen ? "cover" : null,
                    //   backgroundRepeat: !this.props.isSmallScreen ? "no-repeat" : null,

                    // }}
                  >
                    {/* {this.props.isSmallScreen && ( */}
                    <img src={photo.src} alt="gallery" />
                    {/* )} */}
                  </div>
                );
              })}
            </Swiper>
          </div>
          <div className="gallery-thumbs-wrapper">
            <Swiper {...paramsThumb}>
              {this.props.mainMenu[3].gallery.map((photo, index) => {
                return (
                  <div
                    className={
                      this.props.isSmallScreen
                        ? "swiper-slide mobile"
                        : "swiper-slide"
                    }
                    key={index}
                    style={{
                      backgroundImage: !this.props.isSmallScreen
                        ? `url(${photo.src})`
                        : null,
                      backgroundPosition: !this.props.isSmallScreen
                        ? "center center"
                        : null,
                      backgroundSize: !this.props.isSmallScreen
                        ? "cover"
                        : null,
                      backgroundRepeat: !this.props.isSmallScreen
                        ? "no-repeat"
                        : null
                    }}
                  >
                    {this.props.isSmallScreen && (
                      <img src={photo.src} alt="gallery" />
                    )}
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    );
  }
}
