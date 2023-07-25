import React from "react";
import "./NotFound.css";
import { default as notFound } from "../../assets/icons/notFoundIcon.gif";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      className="notFound"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="notFoundContainer">
        <h2 className="notFoundTitle">Page Not found</h2>
        <img src={notFound} alt="not found page" width="100%" />
      </div>
     

          
    </motion.div>
  );
};

export default NotFound;
