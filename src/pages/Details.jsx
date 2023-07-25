import React, { useEffect, useState } from "react";
import "./Details.css";
import { Link, useParams } from "react-router-dom";
import NotFound from "../components/notFound/NotFound";
import detailsData from "../api/BlogDetailsData";
const Details = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let foundBlog = detailsData.find((blog) => blog.id === id);

    if (foundBlog) {
      setBlog(foundBlog);
      console.log(foundBlog);
    }
  }, [id]);
  return (
    <div className="details-container">
      <div>
        <Link to="/blog" className="goback">
          <span>&#8592;</span>Go Back
        </Link>
        {blog ? (
          <div className="blog-container">
            <h3 className="blog-Title">{blog.title}</h3>
            <p className="published">published: {blog.date}</p>
            <img
              className="details-images"
              src={blog.img1}
              srcSet={`${blog.img1} 300w, ${blog.img1} 768w, ${blog.img2} 1280w`}
              alt={blog.title}
            />
            <p className="blog-desc idText">{blog.description}</p>
            <p className="blog-ext idText">{blog.exterior}</p>
            <p className="blog-interior idText">{blog.interior}</p>
            <p className="blog-sum idText">{blog.summary}</p>
          </div>
        ) : (
          <NotFound />
        )}
      </div>
{/* footer */}
      <footer className="footerContainer">
        <div className="footer">
          <div className="grid-item1">
            <h3>
              <Link to="" className="header">
                About us
              </Link>
            </h3>
            <p>
              With over decades of experience in the construction industry,{" "}
              <span className="companyName">CITY BUILDER</span> is a trusted
              name known for delivering high-quality projects on time and within
              budget.
            </p>
            <div className="social-right footerIcons">
              <p>
                <i className="fa-brands fa-whatsapp icons"></i>
              </p>
              <p>
                <i className="fa-brands fa-facebook icons"></i>
              </p>
              <p>
                <i className="fa-brands fa-instagram icons"></i>
              </p>
              <p>
                <i className="fa-brands fa-twitter icons"></i>
              </p>
            </div>
          </div>

          <div className="grid-item2">
            <h3>
              <Link to="" className="header">
                Services
              </Link>
            </h3>
            <p>Contruction</p>
            <p>House Renovation</p>
            <p>Painting</p>
            <p>Archicture Design</p>
          </div>
          <div className="grid-item3">
            <h3>
              <Link to="" className="header">
                About
              </Link>
            </h3>
            <p>Staff</p>
            <p>Team</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>
          <div className="grid-item4">
            <h3>
              <Link to="" className="header">
                Resources
              </Link>
            </h3>
            <p>Security</p>
            <p>Global</p>
            <p>Charts</p>
            <p>Privacy</p>
          </div>
          <div className="grid-item5">
            <h3 className="header nesLetter">SIGN UP TO OUR NEWSLETTER</h3>
            <div className="inputBtn">
              <input
                type="text"
                className="subscribe"
                placeholder="Enter Your Email"
              />
              <button className="subscribeBtn">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="copyRight">
          <p>
            © <span className="companyName">CITY BUILDER</span> All Rights
            Reserved.
          </p>
          <p> Designed by bigadigitalagency.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Details;
