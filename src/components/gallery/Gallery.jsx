import React from "react";
import "./Gallery.css";
import { default as first } from "../../assets/image/portfolio-6.jpg";
import { default as two } from "../../assets/image/portfolio-2.jpg";
import { default as three } from "../../assets/image/portfolio-3.jpg";
import { default as four } from "../../assets/image/portfolio-4.jpg";
import { default as five } from "../../assets/image/portfolio-5.jpg";
import { default as six } from "../../assets/image/portfolio-6.jpg";
const Gallery = () => {
  return (
    <div className="containerGallery">
        <h1 className="galleryTitle">Some of our project</h1>
        <div className="block"></div>
      <div className="gallery">
        <div className="card">
          <div className="imgBox">
            <img src={first} alt="image" />
          </div>
          <div className="contentBox">
            <div className="contentSelf">
              <h3>Istanbul</h3>
              <p>lorem ipsum dolor sit amet, consectetur adipising</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <div className="imgBox">
            <img src={two} alt="image" />
          </div>
          <div className="contentBox">
            <div className="contentSelf">
              <h3>Istanbul</h3>
              <p>lorem ipsum dolor sit amet, consectetur adipising</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <div className="imgBox">
            <img src={three} alt="image" />
          </div>
          <div className="contentBox">
            <div className="contentSelf">
              <h3>Istanbul</h3>
              <p>lorem ipsum dolor sit amet, consectetur adipising</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <div className="imgBox">
            <img src={four} alt="image" />
          </div>
          <div className="contentBox">
            <div className="contentSelf">
              <h3>Istanbul</h3>
              <p>lorem ipsum dolor sit amet, consectetur adipising</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <div className="imgBox">
            <img src={five} alt="image" />
          </div>
          <div className="contentBox">
            <div className="contentSelf">
              <h3>Istanbul</h3>
              <p>lorem ipsum dolor sit amet, consectetur adipising</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <div className="imgBox">
            <img src={six} alt="image" />
          </div>
          <div className="contentBox">
            <div className="contentSelf">
              <h3>Istanbul</h3>
              <p>lorem ipsum dolor sit amet, consectetur adipising</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
