import React from "react";
import CurrencyTable from "components/CurrencyTable";
import "styles/payments/cashless.scss";
import "styles/conversionInfo.scss";
import { Account, ConversionInfo } from "components/ConversionInfo";

const Cashless = () => {
  return (
    <div className="cashless-sec">
      <CurrencyTable />
      <div className="cashless-sec__info">
        <p>Exchange operations are active Mon — Fri between 10:30 and 17:00</p>
      </div>

      <div className="cashless-sec__exc">
        <h2>Make conversion</h2>
        <div className="cashless-sec__conversion">
          <div
            className="cashless-sec__conversion_item"
            style={{ borderRight: "1px solid rgba(0,0,0,0.1)" }}
          >
            <p>Sell info</p>
            <ConversionInfo />
          </div>
          <div className="cashless-sec__conversion_item">
            <p>Buy info</p>
            <ConversionInfo />
          </div>
          <div className="cashless-sec__calc conversion-info">
            <div className="conversion-info__item" style={{ width: "444px" }}>
              <span>Commission holding account</span>
              <Account />
            </div>
            <div className="conversion-info__item">
              <span>Commission amount</span>
              <input
                className="cashless-sec__calc-inp"
                type="number"
                value="18m"
                readOnly
              />
            </div>
            <div className="conversion-info__item" style={{ width: "646px" }}>
              <span>Payment purpose</span>
              <select
                className="conversion-info__item"
                style={{ width: "646px" }}
              >
                <option value={"lorem"}>ex .Lorem, ipsum dolor.</option>
                <option value={"lorem"}>ex .Lorem, ipsum dolor.</option>
                <option value={"lorem"}>ex .Lorem, ipsum dolor.</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashless;
