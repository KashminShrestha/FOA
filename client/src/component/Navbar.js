import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="container-fluid custon-navbar">
        <div className="row">
            <div className="col-3 ">
                <Link className="navbar-brand fs-2 fw-bold text-muted" to="/">FOA</Link>
            </div>
            <div className="col-6 ">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-success" type="submit">Search</button>
                  </form>
            </div>
            <div className="col-3 d-flex justify-content-evenly">
              <Link to="/signin"><i className="bi bi-box-arrow-in-right fs-2"></i></Link>
              <Link to="/cart"><i className="bi bi-cart-check fs-2"></i></Link>
              <Link to="/register"><i className="bi bi-download fs-2"></i></Link>
            </div>
        </div>
    </div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Product</Link>
              </li>
            <li className="nav-item">
              <Link className="nav-link" to="./services.html">Services</Link>
            </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
            </ul>
            
          </div>
        </div>
      </nav>
    
    </>
  )
}

export default Navbar