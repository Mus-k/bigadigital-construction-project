import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import {About} from "./About"
import './Home.css'
import { Project } from './Project'
 const Home = () => {
  return (
    <motion.div
    className='home'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>Home
      <Link to='/about'>open</Link>
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
