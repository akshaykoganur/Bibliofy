import React, { useEffect, useState } from "react";
import books2 from "./images/books2.jpg";
import "../App.css";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

function Product() {
  const [dat, setMyArray] = useState([]);
  const clicked = async (e) => {
    console.log('Hi');
  }
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
                  <div
                    className="card"
                    style={{ width: "20rem", margin: "2%" }}
                  >
                    <img src={data.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a className="btn btn-primary" onClick={clicked}>
                        {data.price}$
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>**</div>
        )}
      </div>
      <div className="container">
        <ProductCard img={books2} title="book4" price={400} />
        <ProductCard img={books2} title="book5" price={500} />
        <ProductCard img={books2} title="book6" price={600} />
      </div>
      <div className="container">
        <ProductCard img={books2} title="book7" price={700} />
        <ProductCard img={books2} title="book8" price={800} />
        <ProductCard img={books2} title="book9" price={900} />
      </div>
      <hr></hr>
      <Cart />
    </>
  );
}

export default Product;
