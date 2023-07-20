import React from 'react'
import {motion} from 'framer-motion'
import './OurTeam.css'
export const OurTeam = () => {
  return (
    <motion.div
    className='ourteam'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>  <div className="home">

    </div> OurTeam</motion.div>
  )
}
