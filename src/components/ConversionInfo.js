import { currency } from "data/currency";
import { userInfo } from "data/userInfo";
import "styles/conversionInfo.scss";
import React from "react";
import arrow from 'svg/icons/arrow.svg'


export const Account = () => {
  return (
    <div className="slc-arw-acc select-block" >
    <img src={arrow} alt="#"/>
    <label htmlFor="accounts">My accounts</label>
    <select name="accounts" style={{ width: "100%" }} >
      {userInfo.accounts.map((elm) => (
        <option key={elm} value={elm}>
          {elm}
        </option>
      ))}
    </select>
    </div>
  );
};
export const Currency = () => {
  return (
    <div className="slc-arw-cur">
    <img src={arrow} alt="#"/>
    <select className="slc-arw-cur" style={{customStyles:arrow}}>
      {currency.map((item) => (
        <option key={item.name} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
    </div>
  );
};
export const ConversionInfo = () => {
  return (
    <div className="conversion-info">
      <div className="conversion-info__item" style={{ marginRight: "20px" }}>
        <span>Amount</span>
        <input className="input-block" type="number" />
      </div>
      <div className="conversion-info__item">
        <span>Currency</span>
        <Currency />
      </div>
      <div className="conversion-info__item" style={{width:'474px'}}>
        <span>Account</span>
        <Account />
      </div>
    </div>
  );
};
