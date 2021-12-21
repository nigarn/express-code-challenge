import React from "react";
import CurrencyTable from "components/CurrencyTable";
import "styles/payments/cashless.scss";
import "styles/conversionInfo.scss";
import { Account, ConversionInfo } from "components/ConversionInfo";
import warning from "svg/warning.svg";
import arrow from "svg/icons/arrow.svg";

const Cashless = () => {
  const commission = 180; //it will change dynamically in the future
  const exchange = "₼";
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
            <div
              className="conversion-info__item"
              style={{ marginLeft: "35px" }}
            >
              <span>
                Commission amount <img src={warning} alt="#" />
              </span>
              <div className="cashless-sec__calc-value">
                <p>
                  {commission} {exchange}
                </p>
              </div>
            </div>
            <div
              className="conversion-info__item  slc-arw-com"
              style={{ width: "646px" }}
            >
              <span>Payment purpose</span>
              <img src={arrow} />
              <select
                className="conversion-info__item slc-arw-com"
                style={{ width: "646px", color: "#616173" }}
              >
                <option value={"lorem"}>ex .Lorem, ipsum dolor.</option>
                <option value={"lorem"}>ex .Lorem, ipsum dolor.</option>
                <option value={"lorem"}>ex .Lorem, ipsum dolor.</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="cashless-sec__btn">
        <button>Convert</button>
      </div>
    </div>
  );
};

export default Cashless;
