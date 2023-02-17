import React, { useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';
//import { useState } from 'react'
//import Cart from './Cart'
//import {useDispatchCart, useCart} from'./ContextReducer';

function ProductCard(props) {
  const [qty, setQty] = useState(1);
  let dispatch  = useDispatchCart()
  let data = useCart();
  const clicked = async () => {
    let finalPrice = qty*props.bookItems.price;
    await dispatch({type:"ADD",id:props.bookItems._id,name:props.bookItems.name,price:finalPrice,qty:qty});
    console.log(data);
    
  }
  
  //let bookSet = props.bookItems;
  return (
    <div className="card" style={{ width: "20rem", margin: "2%" }}>
        
        <div className="card-body">
            <h5 className="card-title">{props.bookItems.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div><select onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e,i) => {
                return(
                  <option key={i+1} value={i+1}>{i+1}</option>
                )
              })}
            </select></div>
            <button className="btn btn-primary" onClick={clicked}>{props.bookItems.price}$</button>
        </div>
    </div>
  )
}

export default ProductCard