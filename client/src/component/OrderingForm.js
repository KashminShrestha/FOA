import React from "react";

const OrderingForm = () => {
  return (
    <>
      <section className="order" id="order">
        <h3 className="sub-heading">order now</h3>
        <h1 className="heading">free & fast</h1>

        <form action="">
          <div className="inputBox">
            <div className="input">
              <span>your name</span>
              <input type="text" placeholder="enter your name" />
            </div>
            <div className="input">
              <span>your phone</span>
              <input type="tel" placeholder="+977 xxxx xxxx" />
            </div>
          </div>

          <div className="inputBox">
            <div className="input">
              <span>your rollnumber</span>
              <input type="text" placeholder="enter your rollnumber" />
            </div>

            <div className="inputBox">
              <div className="input">
                <span>your order</span>
                <input type="text" placeholder="enter food name" />
              </div>
              <div className="input">
                <span>additional food</span>
                <input type="text" placeholder="extra with food" />
              </div>
            </div>

            <div className="inputBox">
              <div className="input">
                <span>how much</span>
                <input type="number" placeholder="how many orders" min="1" />
              </div>
              <div className="input">
                <span>date and time</span>
                <input type="datetime-local" />
              </div>
            </div>

            <div className="input">
              <span>your message</span>
              <textarea placeholder="your message here ..."></textarea>
            </div>
          </div>

          <input type="submit" value="order now" className="btn" />
        </form>
      </section>
    </>
  );
};

export default OrderingForm;
