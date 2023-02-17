import React, { useEffect, useState } from "react";
import books2 from "./images/books2.jpg";
import "../App.css";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

function Product() {
  const [dat, setMyArray] = useState([]);
  //const clicked = async (e) => {
    //console.log('Hi');
  //}
  async function getBooks() {
    try {
      let url = "http://localhost:5000/api/books";
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      setMyArray(data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <>
      <div className="container">
        {dat !== [] ? (
          dat.map((data, idx) => {
            return (
              <div className="row mb-3 fs-3 m-3">
                <div key={idx} className="col-12 col-md-6 col-lg-3">
                  <ProductCard bookItems={data} />
                </div>
              </div>
            );
          })
        ) : (
          <div>**</div>
        )}
      </div>
      
      <hr></hr>
      <Cart />
    </>
  );
}

export default Product;
