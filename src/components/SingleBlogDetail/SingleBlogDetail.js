import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SingleBlogDetail.css"

const sizes = [  
  {id:"size-1", size:"XS",check:true},
  {id:"size-2", size:"S",check:false},
  {id:"size-3", size:"M",check:false},
  {id:"size-4", size:"L",check:false},
  {id:"size-5", size:"XL",check:false},
]
const colors = [
{color:"BLACK",check:false}, {color:"WHITE",check:false}, {color:"RED",check:false}, {color:"BLUE",check:true}, {color:"GREEN",check:false},
]
const socialIcons = [
{link:"https://www.facebook.com/Maybinsefu1/",icon:"fab fa-facebook-f"},
{link:"https://www.twitter.com",icon:"fab fa-twitter"},
{link:"https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHKrOz2HSDNtwAAAYWCuvZorIoAmjWmSMp7eL4ZwwQjl8FzyHKfD7XNG2ThkEMh4HGi_b8ddLqUiWmDNoiioww-oJzKacNCwD5Deue137TcFteOVzciIPVYwzGLs57zcwG4oZk=&original_referer=https://63b63c607d93c40eccfdb126--endearing-puffpuff-1605ac.netlify.app/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fmsys-technologies",icon:"fab fa-linkedin-in"},
{link:"https://www.pinterest.com",icon:"fab fa-pinterest"},
]

const SingleBlogDetail = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        const singleProductData = response.data;
        setProductData(singleProductData);
    };
    fetchSingleData();
  }, [id]);

  return (
    <>
    <div className="ui grid container mt-5">
          <div className="row px-xl-5">
          <div className="col-lg-5 pb-5">
            <img src={productData.image} className="img-fluid w-75 h-100" alt="" />
          </div>
          <div className="col-lg-7 pb-5 mt-5">
            <h3 className="colorful-heading">{productData.title}</h3>
            <div className="d-flex mb-3 align-items-center">
               {productData.rating?.rate}rating
              <small className="pl-3">({productData.rating?.count} Reviews)</small>
            </div>
            <h3 className="colorful-heading mb-4">${productData.price}</h3>
            <p className="mb-4">{productData.description}</p>
            {/* Sizes code */}
            <div className="d-flex mb-3">
              <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
              <form>
                {sizes.map((item,index)=>{
                  return(
                    <div className="custom-control custom-radio custom-control-inline" key={index}>
                    <input
                      type="radio"
                      className="custom-control-input star"
                      id={item.id}
                      name="size"
                      defaultChecked={item.check}
                    />
                    <label className="custom-control-label" htmlFor={item.id}>
                      {item.size}
                    </label>
                  </div>
                  )
                })}
              </form>
            </div>
            {/* Colors code */}
            <div className="d-flex flex-row mb-4">
              <p className="text-dark font-weight-medium mb-0 mr-3">
                Colors:
              </p>
              <form>
                {colors.map((item,index)=>{
                  return(
                <div className="custom-control custom-radio custom-control-inline" key={index}>
                    <input
                      type="radio"
                      className="custom-control-input star"
                      id="specifyColor"
                      name="color"
                      defaultChecked={item.check}
                    />
                    <label className="custom-control-label" htmlFor="specifyColor">
                      {item.color}
                    </label>
                  </div>
                  )
                })}
              </form>
            </div>
           
            {/* social icons code */}
            <div className="d-flex pt-2">
              <p className="text-dark font-weight-medium mb-0 mr-2">
                Share on:
              </p>
              <div className="d-inline-flex">
                {socialIcons.map((item,index)=>{
                  return(
                    <a className="text-dark px-2" key={index} href={item.link} target="_blank" rel="noreferrer">
                    <i className={item.icon} />
                  </a>
                  )
                })}
              </div>
            </div>
          </div>
          </div>
      </div>
    </>
  );
};

export default SingleBlogDetail;
