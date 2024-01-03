import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const Blogs = ({ data, categories }) => {
  const categoriesArray = Array.from(categories);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Use the navigate function to redirect to the BlogDetails route with the selected category
    navigate(`/blog/${category}`);
  };

  return (
    <div className="container-fluid">
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          {[...categoriesArray].map((category, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`} style={{width: "100%",height:"500px",background:"black"}}
              onClick={() => handleCategoryClick(category)} // Add click handler
            >
              <h3 className="display-6 text-white font-weight-semi-bold text-center">
                {category}
              </h3>
            </div>
          ))}
          <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
            <div className="btn btn-dark ml-3">
              <span className="carousel-control-prev-icon"></span>
            </div>
          </a>
          <a className="carousel-control-next" href="#header-carousel" data-slide="next">
            <div className="btn btn-dark mr-3">
              <span className="carousel-control-next-icon"></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
