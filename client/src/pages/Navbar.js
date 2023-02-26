import React, { useState } from "react";
import toast from "react-hot-toast";
import Modal from "../Modal";
import Cart from "./Cart";

function Navbar() {
  const [cartView, setCartView] = useState(false)
  const logout = async (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    toast.success("Logout Successful");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pb-2 pr-1">
      <a className="navbar-brand fs-5" href="/">
        Bibliofy
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto me-auto">
          <li className="nav-item active">
            <a className="btn text-secondary mx-1" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="btn text-secondary mx-1" href="/products">
              Products
            </a>
          </li>
        </ul>
        {localStorage.getItem("token") ? (
          <div className="d-flex">
            <button className="btn text-secondary mx-1" onClick={() => setCartView(true)}>
              My Cart
            </button>
            {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
            <a className="btn text-secondary mx-1" href="/profile">
              Profile
            </a>
            <button className="btn text-danger mx-1" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          ""
        )}
        {!localStorage.getItem("token") ? (
          <div className="d-flex">
            <a className="btn text-secondary mx-1" href="/login">
              Login
            </a>
            <a className="btn text-secondary mx-1" href="/register">
              Register
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

export default Navbar;
