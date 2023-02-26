import React from 'react'
import { useCart, useDispatchCart } from './ContextReducer';
import books2 from './images/books2.jpg'

function Cart() {
  let dat = useCart();
  let dispatch = useDispatchCart();
  if (dat.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch("http://localhost:5000/api/orderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: dat,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("JSON RESPONSE:::::", response.status)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

  let totalPrice = dat.reduce((total, books) => total + books.price, 0);
  return (
    <div>
      {console.log(dat)}
      <div>
        <table className='table table-hover'>
          <thead className='text-success fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Amount</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {dat.map((books, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{books.name}</td>
                <td>{books.qty}</td>
                <td>{books.price}</td>
                <td ><button type="button" className="btn p-0" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>D</button></td>
              </tr>
            ))}
          </tbody>
            </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>
    </div>
  )
}

export default Cart