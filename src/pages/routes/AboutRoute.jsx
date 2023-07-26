import React from "react";
import './Routes.css'
import {default as arrow} from "../../assets/icons/right-arrow.png"
import Mission from "../../components/mission/Mission";
import Gallery from "../../components/gallery/Gallery";
import Testimonial from "../../components/testimonialCarousel/Testimonial";
import Footer from "../Footer";
import { motion } from "framer-motion";
export const AboutRoute = () => {
  return (
    <motion.div
    className="aboutRoute"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }} >

      {/* all top information use  the same css style */}
      <div className="route">
      <div className="topInformation">
        <h1 className="titleRoute">About</h1>
        <p className="bottomText">
          Home <span className="arrowImg"><img src={arrow} alt="Arrow" width="100%"/></span>
          
          <span className="activeRoute">About</span>
        </p>
        </div>
      </div>
      <Mission />
    
      <Testimonial />
      <Gallery />
      <Footer />
      {/* <About/> */}
    </motion.div>
  );
};
