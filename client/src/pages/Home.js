import React from 'react'
import book1 from './images/books1.jpg';
import book2 from './images/books2.jpg';
import book3 from './images/books3.jpg';

function Home() {
  return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
              <li data-target={book1} data-slide-to="0" className="active"></li>
              <li data-target={book2} data-slide-to="1"></li>
              <li data-target={book3} data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
              <div className="carousel-item active">
                  <img src={book1} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                  <img src={book2} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                  <img src={book3} className="d-block w-100" alt="..."/>
              </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
          </a>
      </div>

  )
}

export default Home