import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <Link to="#home">home</Link>
            <Link to="#dishes">dishes</Link>
            <Link to="#about">about</Link>
            <Link to="#menu">menu</Link>
            <Link to="#review">review</Link>
            <Link to="#order">order</Link>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <Link to="#">55 5648 4687</Link>
            <Link to="#">55 5648 5648</Link>
            <Link to="#" style={{ textTransform: "lowercase" }}>
              cosmoscafeteria@gmail.com
            </Link>
            <Link to="#">SatDobato,chapagaun-Road-Nepal</Link>
          </div>

          <div className="box">
            <h3>follow us</h3>
            <Link to="#">facebook</Link>
            <Link to="#">twitter</Link>
            <Link to="#">instagram</Link>
            <Link to="#">linkedin</Link>
          </div>
        </div>

        <div className="credit">
          copyright &copy; 2022 by <span>Group</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
