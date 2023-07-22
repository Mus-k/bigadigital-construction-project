import React from "react";
import "./Gallery.css";
import { default as first } from "../../assets/images/project_img1.png";
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
            <img src={first} alt="image" />
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
