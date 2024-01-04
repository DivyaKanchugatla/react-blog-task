import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Blogs.css";

const Blogs = ({ data,updateCategories }) => {
  const { category } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  const handleSingleCategoryClick = (id,category) => {
    navigate(`/blog/${category}/${id}`);
  };
  useEffect(() => {
    const filteredPosts = data.filter((post) => post.category === category);
    setFilteredData(filteredPosts);
    updateCategories(category)
  }, [data, category,updateCategories]);

  const renderProducts = () => {
    return filteredData.map((product, index) => {
      const { id, title, image, price,category } = product;
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
             
            <button className="text-dark p-0 view-button"><i className="fas fa-eye mr-1 fas-color"></i><span className="view-button" onClick={()=>handleSingleCategoryClick(id,category)}>View Detail</span></button>
             
              <button className="text-dark p-0 view-button"><i className="fas fa-shopping-cart mr-1 fas-color"></i><span className="view-button">Add To Cart</span></button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="text-center m-2">
      <h2 className="my-4">Blog Details for Category: {category}</h2>
      <div className="row">
        {renderProducts()}
      </div>
      <Link to="/" className="text-white border p-1 px-4" style={{backgroundColor:"blue"}}>Back</Link>
    </div>
  );
};

export default Blogs;
