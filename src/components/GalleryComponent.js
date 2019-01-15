import React, { Component } from "react";
import Swiper from "react-id-swiper";
export default class GalleryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallerySwiper: null,
      thumbnailSwiper: null

    };
  }


  galleryRef = (ref) => {
    this.gallerySwiper = React.createRef();
    if (ref) this.setState({ gallerySwiper: ref.swiper })
  }
  thumbRef = (ref) => {
    this.thumbnailSwiper = React.createRef();
    if (ref) this.setState({ thumbnailSwiper: ref.swiper })
  }
  componentDidMount() {

   
   

  
   


  }
  render() {
     console.log(this.gallerySwiper)
    if (this.state.gallerySwiper !== null && this.state.thumbnailSwiper !== null) {

        // this.gallerySwiper.controller.control = this.thumbnailSwiper;
        // this.thumbnailSwiper.controller.control = this.gallerySwiper;
    }


    const paramsThumb = {
      spaceBetween: 20,
      initialSlide: 1,
      centeredSlides: true,
      slidesPerView: 4,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      loopedSlides: this.props.slidesLength,
      loop: true,
      mousewheel: true,
     
    }
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
      




    };
    return (
      <React.Fragment>
        <div className="gallery-wrapper" >
          <Swiper
            {...params}
            ref={this.galleryRef}
          >
            {this.props.children}
          </Swiper>
        </div>
        {/* {!this.props.isSmallScreen && */}
          <div className="gallery-thumbs-wrapper">
            <Swiper
              {...paramsThumb}
              ref={this.thumbRef}
            >
              {this.props.children}
            </Swiper>
          </div>
        {/* } */}

      </React.Fragment>

    );
  }
}
