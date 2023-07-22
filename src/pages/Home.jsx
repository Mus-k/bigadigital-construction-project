import React from "react";
import { motion } from "framer-motion";
import { About } from "./About";
import "./Home.css";
import { Project } from "./Project";
import Slides from "../components/slider/Slides";
import Material from "../components/materials/Material";
import Service from "../components/services/Service";
import Mission from "../components/mission/Mission";
import CountUpFunc from "../components/count up/CountUp";
const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Slides />
     <Material />
      <Service />
      <Mission/>
      <CountUpFunc/>
    </motion.div>
  );
};

export default Home;
