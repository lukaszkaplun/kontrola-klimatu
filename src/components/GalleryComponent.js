import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Swiper from "react-id-swiper";
import Swiper from "swiper/dist/js/swiper.esm.bundle";
export default class GalleryComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let newParams;
    if (!this.props.isSmallScreen) {
      this.galleryThumbs = new Swiper(".gallery-thumbs", {
        ...this.props.paramsThumb
      });
      let thumbs = {
        thumbs: {
          swiper: this.galleryThumbs
        }
      };
      newParams = { ...this.props.params, ...thumbs };
    }

    this.galleryTop = new Swiper(
      ".gallery-top",
      !this.props.isSmallScreen ? { ...newParams } : { ...this.props.params }
    );

    console.log(this.galleryTop);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.isSmallScreen &&
      ReactDOM.findDOMNode(this).getElementsByClassName("gallery-thumbs")[0] !==
        undefined
    ) {
      this.mySwiper = new Swiper("..gallery-thumbs", { ...this.props.paramsThumb
       
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="gallery-wrapper">
          <div className="swiper-container gallery-top">
            <div className="swiper-wrapper">{this.props.children}</div>
            <div className="swiper-pagination" />
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
            <div className="swiper-scrollbar" />
          </div>
        </div>
        {!this.props.isSmallScreen && (
          <div className="gallery-thumbs-wrapper">
            <div className="swiper-container swiper-container-thumbs gallery-thumbs">
              <div className="swiper-wrapper">{this.props.children}</div>
             
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
