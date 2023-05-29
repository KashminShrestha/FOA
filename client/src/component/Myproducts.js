import React from 'react'
import { Link } from 'react-router-dom'

const Myproducts = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-2"><h3 className="mt-3"></h3>
          <h3><Link to="" className="text-danger">New Menu</Link></h3>
          <h3><Link to=""className="text-success">Top Sales</Link></h3>
          
          <h2 className="mt-4 text-primary">Catagories</h2>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" for="flexCheckDefault">
                Breakfast
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" for="flexCheckDefault">
                Lunch
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" for="flexCheckDefault">
                Dinner
              </label>
            </div>
            

            <h2 className="text-primary mt-3">Prices</h2>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label className="form-check-label" for="flexRadioDefault1">
                Above Nrs.300
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label className="form-check-label" for="flexRadioDefault1">
                  Above Nrs.200
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label className="form-check-label" for="flexRadioDefault1">
                  Above Nrs.150
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label className="form-check-label" for="flexRadioDefault1">
                  Above Nrs.100
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label className="form-check-label" for="flexRadioDefault1">
                  Show all
              </label>
            </div></div>
        <div className="col-10">
          <div className="row row-cols-2 row-cols-md-2 g-4">
            <div className="col card_height">
              <div className="card ">
                <img src="https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg?crop=0.942xw:0.707xh;0.0369xw,0.212xh&resize=1200:*" className="card-img-top custon-card-image" alt="..." height="250px" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col card_height">
                <div className="card">
                  <img src="https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg?crop=0.942xw:0.707xh;0.0369xw,0.212xh&resize=1200:*" className="card-img-top custon-card-image" alt="..." height="250px"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            <div className="col card_height">
              <div className="card">
                <img src="https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg?crop=0.942xw:0.707xh;0.0369xw,0.212xh&resize=1200:* " className="card-img-top custon-card-image" alt="..." height="250px"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col card_height">
              <div className="card">
                <img src="https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg?crop=0.942xw:0.707xh;0.0369xw,0.212xh&resize=1200:*" className="card-img-top custon-card-image" alt="..."height="250px"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
        
        
    </div>
    </>
  )
}

export default Myproducts