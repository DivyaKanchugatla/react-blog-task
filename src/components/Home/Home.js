import React from "react";
import { useNavigate } from 'react-router-dom';

const Home = ({ categories }) => {
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    navigate(`/blog/${category}`);
  };

  return (
    <>
    <div style={{background:"blue",height:"70px",width:"100%"}} className="row">
     <div className="d-flex justify-content-between col-12">
      <div className="d-flex text-white col-8 pt-3">
       <p>Home</p>
       <p className="pl-5">Categories</p>
       </div>
       <div className="d-flex text-white justify-content-around col-4 pt-3">
       <p>Products</p>
       <p>CheckOut</p>
       <p>Cart</p>
       <p>Logout</p>
       </div>
     </div>
    </div>
    {([...categories].length!==0)?(<div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          {[...categories].map((category, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`} style={{width: "100%",height:"550px",background:"black"}}
              onClick={() => handleCategoryClick(category)} 
            >
              <h3 className="display-6 text-white font-weight-semi-bold text-center" style={{marginTop:"240px",cursor:"pointer"}}>
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
      </div>):(<div className="d-flex flex-column text-center" style={{marginTop:"100px"}}>
        <h3>You visited all categories</h3>
        <h3>Thank you...</h3></div>)}
      
   </>
  );
};

export default Home;
