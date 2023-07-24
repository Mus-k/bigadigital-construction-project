import React from 'react'
import './Routes.css'
import Gallery from '../../components/gallery/Gallery'
import Footer from '../Footer'
import {default as arrow} from "../../assets/icons/right-arrow.png"
export const ProjectRoute = () => {
  return (
    <div>
        <div className="route">
      <div className="topInfo">
        <h1 className="titleRoute"> Projects</h1>
        <p className="bottomText">
          Home <span className="arrowImg"><img src={arrow} alt="Arrow" width="100%"/></span>
          
          <span className="activeRoute">Projects</span>
        </p>
        </div>
      </div>
      <Gallery/>
      <Footer/>
     
    </div>
  )
}
