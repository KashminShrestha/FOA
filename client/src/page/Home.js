import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "../mystyle.css";
import Carousel from "../component/Carousel";
import Product from "../component/Product";
import Aboutus from "../component/Aboutus";
import OurMenu from "../component/OurMenu";
import OrderingForm from "../component/OrderingForm";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Product />
      <Aboutus />
      <OurMenu />
      <OrderingForm />
      <Footer />
    </>
  );
};

export default Home;
