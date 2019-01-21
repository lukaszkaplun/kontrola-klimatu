import React, { Component } from "react";
import GalleryComponent from "./GalleryComponent";
import Swiper from "react-id-swiper";
export default class Certificates extends Component {
  constructor(props) {
    super(props);

    this.gallerySwiper = null;
    this.thumbnailSwiper = null;
  }
  galleryRef = ref => {
    if (ref) this.gallerySwiper = ref.swiper;
  };

  thumbRef = ref => {
    if (ref) this.thumbnailSwiper = ref.swiper;
  };
  render() {
    if (this.gallerySwiper !== null) {
      this.gallerySwiper.controller.control = this.thumbnailSwiper;
      this.thumbnailSwiper.controller.control = this.gallerySwiper;
    }
    const paramsThumb = {
      spaceBetween: 0,
      // initialSlide: 1,
      centeredSlides: true,
      slidesPerView: 4,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      loopedSlides: this.props.slidesLength,
      loop: true,
      mousewheel: true
    };
    const params = {
      direction: "horizontal",
      slidesPerView: "auto",
      spaceBetween: 20,
      // initialSlide: 1,
      centeredSlides: true,
      loopedSlides: this.props.slidesLength,
      loop: true,
      autoplay: true,
      mousewheel: true,
      breakpointsInverse: true,
      breakpoints: {
        1200: {
          spaceBetween: 0,
          slidesPerView: 1,
          autoplay: false
        }
      }
    };
    return (
      <section
        data-history={this.props.dataHistory}
        className={" swiper-slide single-slide certificates"}
      >
        <div className="content-wrapper">
          <h2 className="heading">Certyfikaty</h2>

          <Swiper ref={this.galleryRef} {...params}>
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
                  backgroundImage: `url(${photo.src})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover"
                }}
              />
              );
            })}
          </Swiper>
          <Swiper ref={this.thumbRef} {...paramsThumb}>
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
                  backgroundImage: `url(${photo.src})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover"
                }}
              />
              );
            })}
          </Swiper>
        </div>
      </section>
    );
  }
}
