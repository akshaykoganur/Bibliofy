import React, { useEffect } from 'react'
//import books2 from './images/books2.jpg';
import Carousel from './Carousel';
//import ProductCard from './ProductCard';
import '../App.css';
import axios from 'axios';

function Home() {
  const getData = async () => {
    try {
      //dispatch(showLoading())
      const response = await axios.post("/api/user/profile", {}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(response.data);
    } catch (error) {
      //dispatch(hideLoading())
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>  
        <Carousel/>
        <div className="home">
            <h1 className='homeh'>Our Products</h1>
            <a className='homea' href='/products'>View More</a>
        </div>
    </>
  )
}

export default Home
