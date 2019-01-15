import React, { Component } from "react";
import Swiper from "react-id-swiper";
export default class GalleryComponent extends Component {
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
      direction: "horizontal",
      slidesPerView: "auto",
      spaceBetween: 20,
      initialSlide:1,
      centeredSlides: true,
      loopedSlides: this.props.slidesLength,
    //   autoHeight: true,
      loop:true,
    //   freeMode: true,
      autoplay:true,
      mousewheel: true,
        // slideClass: "gallery-slide"
    };
    return (
      <div className="gallery-wrapper">
        <Swiper
          {...params}
          ref={node => (node ? (this.swiper = node.swiper) : null)}
        >
          {this.props.children}
        </Swiper>
      </div>
    );
  }
}
