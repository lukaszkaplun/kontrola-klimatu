import React, { Component } from "react";
import ReactDOM from "react-dom";
import Swiper from "react-id-swiper";
export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.gallerySwiper = null;
    this.thumbnailSwiper = null;
  }

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
        data-history={this.props.dataHistory}
        className={"swiper-slide single-slide gallery"}
      >
        <div className="content-wrapper">
          <h2 className="heading">Galeria</h2>
          <div className="gallery-wrapper">
            <Swiper {...params}>
              {this.props.mainMenu[4].gallery.map((photo, index) => {
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
                      backgroundSize: !this.props.isSmallScreen ? "cover" : null
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
          <div className="gallery-thumbs-wrapper">
            <Swiper {...paramsThumb}>
              {this.props.mainMenu[4].gallery.map((photo, index) => {
                return (
                  <div
                    className={
                      this.props.isSmallScreen
                        ? "swiper-slide mobile"
                        : "swiper-slide"
                    }
                    key={index}
                    style={{
                      backgroundImage: `url(${photo.src})`,
                      backgroundPosition: "center center",
                      backgroundSize: "cover"
                    }}
                  />
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    );
  }
}
