import React from 'react'
import { useState } from 'react'
import Cart from './Cart'

function ProductCard(props) {
  const clicked = async (props) => {
    console.log(props.title);
  }

  return (
    <div className="card" style={{ width: "20rem", margin: "2%" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a className="btn btn-primary" onClick={clicked}>{props.price}$</a>
        </div>
    </div>
  )
}

export default ProductCard