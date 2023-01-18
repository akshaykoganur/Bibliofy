import React from 'react'
import books2 from './images/books2.jpg';
import Carousel from './Carousel';
import ProductCard from './ProductCard';
import '../App.css';

function Home() {
  return (
    <>  
        <Carousel/>
        <div className="home">
            <h1 className='homeh'>Our Products</h1>
            <a className='homea' href='/products'>View More</a>
        </div>
        <div className="container">
            <ProductCard img = {books2} title='book1' price={100}/>
            <ProductCard img = {books2} title='book1' price={200}/>
            <ProductCard img = {books2} title='book1' price={300}/>
        </div>
    </>
  )
}

export default Home