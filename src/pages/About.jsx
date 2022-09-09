import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Portfoliopicture";

function About() {
  return (
    <div className="centerflex">
      <Navbar />

      <div className="containerImgSlide">
        <Testimonial className="containerImgSlide" />
      </div>
      <div className="imgbelow">
        <h1>Space</h1>
      </div>
    </div>
  );
}
export default About;
