import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Animate from "../components/Hero";
import ImgCarousel from "../components/Imgcarousel";
function Home() {
return (
<div className=''>
    <Animate/>
    <ImgCarousel/>
</div>
);
}
 export default Home;