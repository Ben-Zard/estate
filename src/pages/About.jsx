import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Imgcarousel from "../components/Imgcarousel";
import Cta from "../components/Cta";
import Testimonial from "../components/Testimonial";
import Herobase from "../components/Herobase"
import Statistic from "../components/Statistic"
function About() {
  return (
    <div className="">
<Navbar/>
<Herobase/>
<Imgcarousel/>
<Cta/>
<Statistic/>
<Testimonial/>
<Footer/>
    </div>
  );
}
export default About;
