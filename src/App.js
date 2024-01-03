// App.js
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import BlogSingleDetail from "./components/BlogSingleDetail"
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";

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
      console.log(uniqueCat);
      console.log(res);
      setData(res);
    }
    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blogs data={data} categories={categories}/>} />
        <Route path="/blog/:category" element={<BlogDetails data={data}/>} />
        <Route path="/product/:productId" element={<BlogSingleDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
