import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <section className="dishes" id="dishes">
        <h3 className="sub-heading">Our Dishes</h3>
        <h1 className="heading">Popular Dishes</h1>

        <div className="box-container">
          <div className="box">
            <Link to="#" className="fas fa-heart"></Link>
            <Link to="#" className="fas fa-eye"></Link>
            <img src="images/dish-1.png" alt="" />
            <h3>Burger</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs.15.99</span>
            <Link to="#" className="btn">
              Add to cart
            </Link>
          </div>

          <div className="box">
            <Link to="#" className="fas fa-heart"></Link>
            <Link to="#" className="fas fa-eye"></Link>
            <img src="images/chow.jpg" alt="" />
            <h3>Chowmein</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs.15.99</span>
            <Link to="#" className="btn">
              Add to cart
            </Link>
          </div>

          <div className="box">
            <Link to="#" className="fas fa-heart"></Link>
            <Link to="#" className="fas fa-eye"></Link>
            <img src="images/AluParatha.jpg" alt="" />
            <h3>Alu Paratha</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs.15.99</span>
            <Link to="#" className="btn">
              Add to cart
            </Link>
          </div>

          <div className="box">
            <Link to="#" className="fas fa-heart"></Link>
            <Link to="#" className="fas fa-eye"></Link>
            <img src="images/dish-4.png" alt="" />
            <h3>Pizza</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs.15.99</span>
            <Link to="#" className="btn">
              Add to cart
            </Link>
          </div>

          <div className="box">
            <Link to="#" className="fas fa-heart"></Link>
            <Link to="#" className="fas fa-eye"></Link>
            <img src="images/AlooSamosa2.png" alt="" />
            <h3>Samosa</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs.15.99</span>
            <Link to="#" className="btn">
              Add to cart
            </Link>
          </div>

          <div className="box">
            <Link to="#" className="fas fa-heart"></Link>
            <Link to="#" className="fas fa-eye"></Link>
            <img src="images/vegetable-pakoras.jpg" alt="" />
            <h3>Pakora</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs.15.99</span>
            <Link to="#" className="btn">
              Add to cart
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
