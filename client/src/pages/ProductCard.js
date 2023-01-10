import React from 'react'

function ProductCard(props) {
  return (
    <div className="card" style={{ width: "20rem", margin: "2%" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Book at {props.price}$</a>
        </div>
    </div>
  )
}

export default ProductCard