import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import SingleBlogDetail from './components/SingleBlogDetail/SingleBlogDetail';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      const res = await response.data;
      const cat = res.map((each) => each.category);
      const uniqueCat = new Set(cat)
      setCategories(uniqueCat); 
      setData(res);
    }
    fetchData();
  }, []);

  const updateCategories = (category) => {
    const cats = [...categories].filter((each)=>each!==category)
    setCategories(cats)
  }

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data} categories={categories}/>} />
        <Route path="/blog/:category" element={<Blogs data={data} updateCategories={updateCategories}/>} />
        <Route path="/blog/:category/:id" element={<SingleBlogDetail/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
