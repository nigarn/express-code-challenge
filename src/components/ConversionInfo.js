import { currency } from "data/currency";
import { userInfo } from "data/userInfo";
import "styles/conversionInfo.scss";
import React from "react";

export const Account = () => {
  return (
    
    <select style={{ width: "100%" }}>
      {userInfo.accounts.map((elm) => (
        <option key={elm} value={elm}>
          {elm}
        </option>
      ))}
    </select>
  );
};
export const Currency = () => {
  return (
    <select>
      {currency.map((item) => (
        <option key={item.name} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
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
