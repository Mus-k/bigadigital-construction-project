import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import {About} from "./About"
import './Home.css'
import { Project } from './Project'
import Slides from '../components/slider/Slides'
import Material from '../components/materials/Material'
import Service from '../components/services/Service'
import Accordion from '../components/accordion/Accordion'
 const Home = () => {
  return (
    <motion.div
    className='home'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <Slides/>
      <Material/>
      <Service/>
      <Accordion/>
     
      <div className="home">

      </div>
      <div className="home">

      </div>
      <div className="home">

      </div>
      <About/>
      <Project/>
    </motion.div>
  )
}


export default Home
