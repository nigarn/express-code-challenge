import React from "react";
import "styles/currencyTable.scss";
import { currency } from "data/currency";

const filterCurrency = () => {};
const CurrencyTable = () => {
  return (
    <table className="currency-tab">
      <thead>
        <tr>
          <th
            style={{
              color: "#616173",
              fontWeight: "600",
              fontSize: "12px",
              paddingLeft: "30px",
            }}
          >
            Currency
          </th>

          {currency.map((item) => {
            if (item.name !== "AZN") {
              return (
                <th key={item.name}>
                  <img src={item.src} alt="#" /> {item.name}
                </th>
              );
            }
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            style={{
              color: "#616173",
              fontSize: "12px",
              paddingLeft: "30px",
            }}
          >
            Buy Price
          </td>
          {currency.map((item) => {
            if (item.name !== "AZN") {
              return (
                <td key={item.name}>
                  <img src={item.incIcon} alt="#" /> {item.buyPrice}
                </td>
              );
            }
          })}
        </tr>
        <tr>
          <td
            style={{
              color: "#616173",
              fontSize: "12px",
              paddingLeft: "30px",
            }}
          >
            Sell Price
          </td>
          {currency.map((item) => {
            if (item.name !== "AZN") {
              return (
                <td key={item.name}>
                  <img src={item.decIcon} alt="#" />
                  {item.sellPrice}
                </td>
              );
            }
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default CurrencyTable;
