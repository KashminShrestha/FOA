import React from "react";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <>
      <section className="about" id="about">
        <h3 className="sub-heading">About Us</h3>
        <h1 className="heading">Why Choose Us?</h1>

        <div className="row">
          <div className="image">
            <img src="images/imagebg.jpg" alt="" />
          </div>

          <div className="content">
            <h3>best food in the college premises</h3>
            <p>
              While studying …….students often get so Hungry & Tired that Food &
              Rest cannot appear to them except in the form of Cafeteria and
              Cosmos college provides its students, staff and faculty with an
              amazing café experience in the college campus with its well
              maintained and well equipped Cafeteria.The cafeteria is not just a
              food joint but a place to relax, interact, rejuvenate and take a
              refuge from the daily hectic schedule!!!
            </p>

            <div className="icons-container">
              <div className="icons">
                <i className="fas fa-cutlery"></i>
                <span>Hygenic Food</span>
              </div>
              <div className="icons">
                <i className="fas fa-dollar-sign"></i>
                <span>easy payments</span>
              </div>
              <div className="icons">
                <i className="fas fa-headset"></i>
                <span>24/7 service</span>
              </div>
            </div>

            <Link to="#" className="btn">
              learn more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
