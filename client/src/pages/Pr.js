import React from 'react'

function Pr() {
  
  return (
    <div>
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
              <tr>
                <th scope='row'>1</th>
                <td>ab</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <th scope='row'>1</th>
                <td>ab</td>
                <td>2</td>
                <td>3</td>
              </tr>
          </tbody>
        </table>
        <div>
          {/*<button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>*/}
        </div>
      </div>
    </div>
  )
}

export default Pr
