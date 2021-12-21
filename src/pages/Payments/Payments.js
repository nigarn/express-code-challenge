import React from "react";
import "styles/payments/payments.scss";
import Cashless from "./Cashless";

const Payments = () => {
  return (
    <div className="content">
      <h1>Conversion</h1>
      <div className="content__title">
        <ul className="content__title-list">
          <li className="content__title-list-itm content__title-list-itm-active">
            <h2>Nağdsız</h2>
          </li>
          <li className="content__title-list-itm">
            <h2>Nağd</h2>
          </li>
          <li style={{ color: "#faa61a" }} className="content__title-list-itm">
            <h2>Special Offer</h2>
          </li>
        </ul>
      </div>
      <Cashless />
     
    </div>
  );
};

export default Payments;
