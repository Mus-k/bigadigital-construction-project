import React from "react";
import './Routes.css'
import { motion } from "framer-motion";
import { Blog } from '../Blog'
import {default as arrow} from "../../assets/icons/right-arrow.png"
import Footer from '../Footer';
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "../../components/scrollTo/ScrollTop";
export const BlogRoute = () => {


  return (
    <>
    <Helmet>
      <title>blog</title>
      <meta name="description" content="view our latest projects" />
      <link rel="canonical" href="/blog" />
    </Helmet>
    <motion.div
    className="bloRoute"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }} >
         <div className="route">
      <div className="topInformation">
        <h1 className="titleRoute">Blog</h1>
        <p className="bottomText">
          Home <span className="arrowImg"><img src={arrow} alt="Arrow" width="100%"/></span>
          
          <span className="activeRoute">Blog</span>
        </p>
        </div>
      </div>
     
       <Blog/>
       <ScrollToTopButton/>
      <Footer/>
    
     
    </motion.div>
    </>
  )
}
