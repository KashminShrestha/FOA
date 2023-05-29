import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };
  return (
    <>
      {/* header */}
      <header>
        <Link to="#home" className="logo">
          <i className="fas fa-utensils"></i>Cosmos Cafeteria.
        </Link>

        <nav className="navbar">
          <Link to="#home" className="active">
            Home
          </Link>
          <Link to="#dishes">Dishes</Link>
          <Link to="#about">About</Link>
          <Link to="#menu">Menu</Link>
          <Link to="#review">Review</Link>
          <Link to="#order">Order</Link>
        </nav>

        <div className="icons">
            
          <i className="fas fa-bars " id="menu-bars"></i>
          <i className={`expanding-search-bar ${expanded ? 'expanded' : ''}`}>
              <input
                type="text"
                placeholder="Search here"
                onFocus={handleExpand}
                onBlur={handleCollapse}
              />
              <button type="submit" style={{background:"none"}}><i className="fas fa-search" id="search-icon"></i></button>
            </i>
          
          <Link to="#" className="fas fa-heart"></Link>
          <Link to="#" className="fas fa-shopping-cart"></Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
