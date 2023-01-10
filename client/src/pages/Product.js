import React from 'react'
import books2 from './images/books2.jpg';
import '../App.css';
import ProductCard from './ProductCard';

function Product() {
  return (
    <>
        <div className="container">
            <ProductCard img = {books2} title='book1' price={100}/>
            <ProductCard img = {books2} title='book2' price={200}/>
            <ProductCard img = {books2} title='book3' price={300}/>
        </div>
        <div className="container">
            <ProductCard img = {books2} title='book4' price={400}/>
            <ProductCard img = {books2} title='book5' price={500}/>
            <ProductCard img = {books2} title='book6' price={600}/>
        </div>
        <div className="container">
            <ProductCard img = {books2} title='book7' price={700}/>
            <ProductCard img = {books2} title='book8' price={800}/>
            <ProductCard img = {books2} title='book9' price={900}/>
        </div>
    </>
  )
}

export default Product