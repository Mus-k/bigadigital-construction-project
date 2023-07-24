import React from 'react'
import './Routes.css'
import { Blog } from '../Blog'
import {default as arrow} from "../../assets/icons/right-arrow.png"
export const BlogRoute = () => {
  return (
    <div>
         <div className="route">
      <div className="topInfo">
        <h1 className="titleRoute">Blog</h1>
        <p className="bottomText">
          Home <span className="arrowImg"><img src={arrow} alt="Arrow" width="100%"/></span>
          
          <span className="activeRoute">Blog</span>
        </p>
        </div>
      </div>
      <Blog/>
    </div>
  )
}
