import React from "react";

function ImageSlide ({src}) {

        return (
          <div className="image-slide">
            { <img src={src} width = "100%" /> }
          </div>
        );
      }
  

export default ImageSlide;
