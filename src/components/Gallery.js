import React, { Component } from "react";

import GalleryComponent from "./GalleryComponent";

export default class Gallery extends Component {




  render() {

    // console.log(this.props)
    const paramsThumb = {
      spaceBetween: 20,
      // initialSlide: 1,
      centeredSlides: true,
      slidesPerView: 3,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      loopedSlides: this.props.slidesLength,
      loop: true,
      mousewheel: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
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
        className={"swiper-slide single-slide gallery"}
      >
        <div className="content-wrapper">
          <h2 className="heading">Galeria</h2>

          <GalleryComponent
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
                </div>
              );
            })}
          </GalleryComponent>
        </div>
      </section>
    );
  }
}
