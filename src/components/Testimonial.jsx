import React, { Component } from "react";
import Slider from "react-slick";
import ImageSlide from "./ImagesSlide";
import Image from "./Image";
// import { Parallax } from "react-scroll-parallax";

 function Testimonial () {
    const settings = {
      infinite: false,
      variableWidth: true,
      centerMode: true,
      speed: 500,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div className="containerT">
        <div className="flex ">
          <div className="full ">
            <div className="image-slider-container">
              <h3>
               this is text
              </h3>
              <div className="image-slider">
                <Slider {...settings}>
                  <ImageSlide />
                  <ImageSlide />
                  <ImageSlide />
                  {/* <Image /> */}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Testimonial; 
