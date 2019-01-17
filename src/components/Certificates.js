import React, { Component } from "react";
import GalleryComponent from "./GalleryComponent";

export default class Certificates extends Component {
  render() {
    const paramsThumb = {
      spaceBetween: 0,
      initialSlide: 1,
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
      initialSlide: 1,
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

          <GalleryComponent
            params={params}
            paramsThumb={paramsThumb}
            isSmallScreen={this.props.isSmallScreen}
            slidesLength={this.props.mainMenu[3].gallery.length}
          >
            {this.props.mainMenu[3].gallery.map((photo, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <img src={photo.src} alt={photo.alt} />
                </div>
              );
            })}
          </GalleryComponent>
        </div>
      </section>
    );
  }
}
