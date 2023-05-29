import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  
  return (
    <>
      <section className="home" id="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <div className="content">
                <span>our special dish</span>
                <h3>Nepali Khana Sets</h3>
                <p>
                  Dal bhat is the traditional Nepali food of locals and trekkers
                  in the Himalayas.
                </p>
                <Link to="#" className="btn">
                  order now
                </Link>
              </div>
              <div className="image">
                <img src="./images/nepaliset.png" alt="" />
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="content">
                <span>our special dish</span>
                <h3>Momo</h3>
                <p>
                  Momo is a type of steamed filled dumpling with origins from
                  the Himalayan region.
                </p>
                <Link to="#" className="btn">
                  order now
                </Link>
              </div>
              <div className="image">
                <img src="images/momo.png" alt="" />
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="content">
                <span>our special dish</span>
                <h3>Chow mein</h3>
                <p>
                  Chow mein is another popular dish after momo, which is easily
                  available in local eateries or restaurant corner in town.
                </p>
                <Link to="#" className="btn">
                  order now
                </Link>
              </div>
              <div className="image">
                <img src="images/home-img-1.png" alt="" />
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
