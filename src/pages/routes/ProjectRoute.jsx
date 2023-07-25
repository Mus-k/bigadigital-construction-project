import React from 'react'
import './Routes.css'
import Gallery from '../../components/gallery/Gallery'
import Footer from '../Footer'
import { motion } from "framer-motion";
import {default as arrow} from "../../assets/icons/right-arrow.png"
export const ProjectRoute = () => {
  return (
    <motion.div
    className="bloRoute"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
        <div className="route">
      <div className="topInformation">
        <h1 className="titleRoute"> Projects</h1>
        <p className="bottomText">
          Home <span className="arrowImg"><img src={arrow} alt="Arrow" width="100%"/></span>
          
          <span className="activeRoute">Projects</span>
        </p>
        </div>
      </div>
      <Gallery/>
      <Footer/>
     
    </motion.div>
  )
}
