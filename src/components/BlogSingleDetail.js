import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogSingleDetail = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleData = async () => {
      
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        const singleProductData = response.data;
        console.log("single",singleProductData);
        setProductData(singleProductData);
    
    };

    fetchSingleData();
  }, [id]);

  return (
    <div>
      <h2>Product Details for ID: {id}</h2>
      <div>
        <p>Title: {productData.title}</p>
        <p>Price: ${productData.price}</p>
        <p>Description: {productData.description}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default BlogSingleDetail;
