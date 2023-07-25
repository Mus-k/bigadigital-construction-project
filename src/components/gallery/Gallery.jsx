import React from "react";
import "./Gallery.css";
import { default as first } from "../../assets/images/portfolio-6.jpg";
import { default as two } from "../../assets/images/portfolio-2.jpg";
import { default as three } from "../../assets/images/portfolio-3.jpg";
import { default as four } from "../../assets/images/portfolio-4.jpg";
import { default as five } from "../../assets/images/portfolio-5.jpg";
import { default as six } from "../../assets/images/portfolio-6.jpg";
const Gallery = () => {
  return (
    <div className="containerGallery">
      <h1 className="galleryTitle">Some of our project</h1>
      <div className="block"></div>
      <div className="gallery">
        <div className="card">
          <div className="imgBox">
            <img src={first} alt="project One" />
          </div>
          <div className="bottomConten">
            <h3 className="bottomTitle">Residential Towers </h3>
            <p>The project will consist of three residential towers</p>
          </div>
          <div className="contentBox">
            <div className="contentSelf">
              <h3>Istanbul</h3>
              <p>A city with a vibrant metropolis bridging two continents, boasts a rich history, stunning architecture, and a captivating blend of Eastern and Western cultures.</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <div className="imgBox">
            <img src={two} alt="second project" />
          </div>
          <div className="bottomConten">
            <h3 className="bottomTitle">Parking</h3>
            <p>An underground parking facility will be constructed to accommodate residents' vehicles</p>
          </div>
          <div className="contentBox">
            <div className="contentSelf">
              <h3>Istanbul</h3>
              <p>A city with a vibrant metropolis bridging two continents, boasts a rich history, stunning architecture, and a captivating blend of Eastern and Western cultures.</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <div className="imgBox">
            <img src={three} alt="project" />
          </div>
          <div className="bottomConten">
            <h3 className="bottomTitle">Sustainable Design </h3>
            <p>The construction will follow eco-friendly practices, with energy-efficient systems</p>
          </div>
          <div className="contentBox">
            <div className="contentSelf">
              <h3>Istanbul</h3>
              <p>A city with a vibrant metropolis bridging two continents, boasts a rich history, stunning architecture, and a captivating blend of Eastern and Western cultures.</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <div className="imgBox">
            <img src={four} alt="project four" />
          </div>
          <div className="bottomConten">
            <h3 className="bottomTitle">Green Spaces </h3>
            <p>Emphasis will be placed on creating lush green spaces throughout the complex,</p>
          </div>
          <div className="contentBox">
            <div className="contentSelf">
              <h3>Istanbul</h3>
              <p>A city with a vibrant metropolis bridging two continents, boasts a rich history, stunning architecture, and a captivating blend of Eastern and Western cultures.</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <div className="imgBox">
            <img src={five} alt="project five" />
          </div>
          <div className="bottomConten">
            <h3 className="bottomTitle">Recreational Facilities </h3>
            <p>The complex will include a state-of-the-art fitness center, swimming pool, jogging tracks.</p>
          </div>
          <div className="contentBox">
            <div className="contentSelf">
              <h3>Istanbul</h3>
              <p>A city with a vibrant metropolis bridging two continents, boasts a rich history, stunning architecture, and a captivating blend of Eastern and Western cultures.</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <div className="imgBox">
            <img src={six} alt="project six" />
          </div>
          <div className="bottomConten">
            <h3 className="bottomTitle">Smart Technology </h3>
            <p> The apartments will be equipped with smart home technology, allowing residents to control lighting</p>
          </div>
          <div className="contentBox">
            <div className="contentSelf">
              <h3>Istanbul</h3>
              <p>A city with a vibrant metropolis bridging two continents, boasts a rich history, stunning architecture, and a captivating blend of Eastern and Western cultures.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
