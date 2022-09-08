import React from "react";

class ImageSlide extends React.Component {
    render() {
        return (
          <div className="image-slide">
            { <img src="https://source.unsplash.com/random" alt="unsplash" /> }
          </div>
        );
      }
    }

export default ImageSlide;
