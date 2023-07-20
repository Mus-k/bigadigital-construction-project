import React from 'react';
import {motion} from 'framer-motion'
import './Blog.css'
export const Blog = () => {
  return (
    <motion.div
    className='blog'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>Bl  <div className="home">
blogo
    </div></motion.div>
  )
}
