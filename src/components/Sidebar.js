import React from "react";
import vector from "svg/sideBarIcons/vector.svg";
import payment from "svg/sideBarIcons/payment.svg";
import payroll from "svg/sideBarIcons/payroll.svg";
import listIcon from "svg/sideBarIcons/listIcon.svg";
import clockIcon from "svg/sideBarIcons/clockIcon.svg";
import products from "svg/sideBarIcons/products.svg";
import swift from "svg/sideBarIcons/swift.svg";
import aniPay from "svg/sideBarIcons/aniPay.svg";
import location from "svg/sideBarIcons/location.svg";
import "styles/sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li>
          <div className="sidebar__list-icon">
            <img src={vector} alt="#" />
          </div>
          <p>Dashboard</p>
        </li>
        <li>
          <div className="sidebar__list-icon">
            <img src={payment} alt="#" />
          </div>
          <p>Payment</p>
        </li>
        <li>
          <div className="sidebar__list-icon">
            <img src={payroll} alt="#" />
          </div>
          <p>Payroll</p>
        </li>
        <li>
          <div className="sidebar__list-icon">
            <img src={listIcon} alt="#" />
          </div>
          <p>Template</p>
        </li>
        <li>
          <div className="sidebar__list-icon">
            <img src={clockIcon} alt="#" />
          </div>
          <p>History</p>
        </li>
        <li>
          <div className="sidebar__list-icon">
            <img src={products} alt="#" />
          </div>
          <p>Products</p>
        </li>
        <li>
          <div className="sidebar__list-icon">
            <img src={swift} alt="#" />
          </div>
          <p>Express POS</p>
        </li>
        <li>
          <div className="sidebar__list-icon">
            <img src={aniPay} alt="#" />
          </div>
          <p>Ani Pay</p>
        </li>
        <li>
          <div className="sidebar__list-icon">
            <img src={location} alt="#" />
          </div>
          <p>Map</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
