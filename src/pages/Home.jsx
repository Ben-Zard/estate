import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Animate from "../components/Hero";
import Testimonial from "../components/Portfoliopicture";
import { Photo } from "../components/Photo";
function Home() {
return (
<div className=''>
    <Animate/>
    <Photo/>
</div>
);
}
 export default Home;