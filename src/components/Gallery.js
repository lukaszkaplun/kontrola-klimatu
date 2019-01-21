import React, { Component } from "react";
import GalleryComponent from "./GalleryComponent";

import Swiper from "react-id-swiper";
export default class Gallery extends Component {
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
  componentDidMount() {
    if (this.gallerySwiper !== null) {
      this.gallerySwiper.controller.control = this.thumbnailSwiper;
      this.thumbnailSwiper.controller.control = this.gallerySwiper;
    }
  }

  render() {
    // console.log(this.props.isSmallScreen)
    const paramsThumb = {
      spaceBetween: 20,
      centeredSlides: true,
      slidesPerView: 3,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      loopedSlides: this.props.slidesLength,
      loop: true,
      initialSlide: 1
      // mousewheel: true,
    };
    const params = {
      direction: "horizontal",
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: true,
      loopedSlides: this.props.slidesLength,
      loop: true,
      initialSlide: 1,
      autoplay: true,
      // mousewheel: true,
      breakpointsInverse: true
      // breakpoints: {
      //   1200: {
      //     spaceBetween: 0,
      //     slidesPerView: 1,
      //     autoplay: false
      //   }
      // }
    };

    return (
      <section
        data-history={this.props.dataHistory}
        className={"swiper-slide single-slide gallery"}
      >
        <div className="content-wrapper">
          <h2 className="heading">Galeria</h2>

          <Swiper ref={this.galleryRef} {...params}>
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
          <Swiper ref={this.thumbRef} {...paramsThumb}>
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

          {/* <GalleryComponent
            params={params}
            paramsThumb={paramsThumb}
            isSmallScreen={this.props.isSmallScreen}
            slidesLength={this.props.mainMenu[4].gallery.length}
          >
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
                >
                  {/* <img src={photo.src} alt={photo.alt} /> */}
          {/* </div>
              );
            })}
          </GalleryComponent> */}
        </div>
      </section>
    );
  }
}
