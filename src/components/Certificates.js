import React, { Component } from "react";
import GalleryComponent from "./GalleryComponent";

export default class Certificates extends Component {
  render() {
    return (
      <section  data-history={this.props.dataHistory} className={" swiper-slide single-slide certificates"}>
        <div className="content-wrapper">
          <h2 className="heading">Certyfikaty</h2>
          
            <GalleryComponent isSmallScreen={this.props.isSmallScreen} slidesLength={this.props.mainMenu[3].gallery.length}>
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
