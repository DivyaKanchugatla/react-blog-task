import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogDetails.css";

const BlogDetails = ({ data }) => {
  const { category } = useParams();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredPosts = data.filter((post) => post.category === category);
    setFilteredData(filteredPosts);
  }, [data, category]);

  const renderProducts = () => {
    return filteredData.map((product, index) => {
      const { id, title, image, price } = product;
      return (
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={index}>
          <div className="card border-0 mb-4">
            <div className="card-header p-0 product-img border bg-transparent overflow-hidden position-relative">
              <img className="img-fluid w-100 h-100 img-styling" src={image} alt="" />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">{title}</h6>
              <div className="d-flex justify-content-center">
                <h6>${price}</h6><h6 className="text-muted ml-2"><del>${price}</del></h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <Link to={`/blog/${id}`} style={{ textDecoration: "none" }} className="linkText">
                <i className="fas fa-eye mr-1 fas-color"></i><span className='' style={{ color: "black" }} >View Detail</span>
              </Link>
              <button className="text-dark p-0 view-button"><i className="fas fa-shopping-cart mr-1 fas-color"></i><span className="view-button">Add To Cart</span></button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Blog Details for Category: {category}</h2>
      <div className="row">
        {renderProducts()}
      </div>
      <Link to="/">Back</Link>
    </div>
  );
};

export default BlogDetails;
