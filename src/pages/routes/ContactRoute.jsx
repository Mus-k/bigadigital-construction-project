import React from "react";
import { Contact } from "../Contact";
import './Routes.css'
import { motion } from "framer-motion";
import Footer from "../Footer";
import {default as arrow} from "../../assets/icons/right-arrow.png"
export const ContactRoute = () => {
  return (
    <motion.div
    className="bloRoute"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
       <div className="route">
      <div className="topInformation">
        <h1 className="titleRoute">Contact</h1>
        <p className="bottomText">
          Home <span className="arrowImg"><img src={arrow} alt="Arrow" width="100%"/></span>
          
          <span className="activeRoute">Contact</span>
        </p>
        </div>
      </div>
      <Contact />
      <Footer />
    </motion.div>
  );
};
