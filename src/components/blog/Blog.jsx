import React from "react";
import './Blog.css';
import {default as calendar} from "../../assets/icons/schedule.png"
import {default as blog1} from "../../assets/image/x-desktop-first.jpg"
const Blog = () => {
  return (
    <section className="blogMain">
      <h1 className="blogTilte">LATEST FROM OUR BLOG POST</h1>
      <div className="blogContainer">
        <div className="cardImage">
            <img src={blog1 }alt="" width="100%"/>
            <div className="topInfo"><p className="nature">The Nature of Change</p> 
                <img src={calendar} alt="calendar" className="calendar"
                width="100%"/><p className="date"> july 17 2023</p></div>
            <p className="cardImageText">Change can take many forms,
                 often presenting itself as 
                 opportunities, challenges, or even 
                 unexpected upheavals.  </p>
        </div>
        <div className="cardImage">
            <img src={blog1 }alt="" width="100%"/>
            <div className="topInfo"><p className="nature">The Nature of Change</p> 
                <img src={calendar} alt="calendar" className="calendar"
                width="100%"/><p className="date"> july 17 2023</p></div>
            <p className="cardImageText">Change can take many forms,
                 often presenting itself as 
                 opportunities, challenges, or even 
                 unexpected upheavals.  </p>
        </div>

        <div className="cardImage">
            <img src={blog1 }alt="" width="100%"/>
            <div className="topInfo"><p className="nature">The Nature of Change</p> 
                <img src={calendar} alt="calendar" className="calendar"
                width="100%"/><p className="date"> july 17 2023</p></div>
            <p className="cardImageText">Change can take many forms,
                 often presenting itself as 
                 opportunities, challenges, or even 
                 unexpected upheavals.  </p>
        </div>
        
      </div>
    </section>
  );
};

export default Blog;
