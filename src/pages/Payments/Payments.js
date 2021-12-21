import React from "react";
import "styles/payments/payments.scss";
import Cashless from "./Cashless";

const Payments = () => {
  return (
    <div className="content">
      <h1>Conversion</h1>
      <div className="content__title">
        <ul className="content__title-list">
          <li>
            <h2>Nağdsız</h2>
          </li>
          <li>
            <h2>Nağd</h2>
          </li>
          <li style={{ color: "#faa61a" }}>
            <h2>Special Offer</h2>
          </li>
        </ul>
      </div>
      <Cashless />
     
    </div>
  );
};

export default Payments;
