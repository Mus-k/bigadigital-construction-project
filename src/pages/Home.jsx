import React from "react";
import { motion } from "framer-motion";

import "./Home.css";
import Slides from "../components/slider/Slides";
import Material from "../components/materials/Material";
import Service from "../components/services/Service";
import Mission from "../components/mission/Mission";
import CountUpFunc from "../components/count up/CountUp";
import Truck from "../components/infinitive truck/Truck";
import Gallery from "../components/gallery/Gallery";
import Testimonial from "../components/testimonialCarousel/Testimonial";
import Blog from "../components/blog/Blog";
import Footer from "./Footer";
import { Contact } from "./Contact";
import Expert from "../components/expert/Expert";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Slides />
      <CountUpFunc />
      <Material />
      <Service />
      <Mission />
      <Truck />
      <Gallery />
      <Testimonial />
      <Blog />
      <Expert/>
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Home;
