import React, { Component } from "react";
import GalleryComponent from "./GalleryComponent";

export default class Certificates extends Component {
  render() {
    return (
      <section className={"single-slide certificates"}>
        <div className="content-wrapper">
          <h2 className="heading">Certyfikaty</h2>
          
            <GalleryComponent slidesLength={this.props.mainMenu[3].gallery.length}>
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
