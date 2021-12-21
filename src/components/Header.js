import React from "react";
import logo from "svg/icons/logo.svg";
import call from "svg/icons/call.svg";
import scale from "svg/icons/scale.svg";
import loan from "svg/icons/loan.svg";
import security from "svg/icons/security.svg";
import share from "svg/icons/share.svg";
import settings from "svg/icons/settings.svg";
import messages from "svg/icons/messages.svg";
import notification from "svg/icons/notification.svg";
import logout from "svg/icons/logout.svg"
import { AiOutlineSearch } from "react-icons/ai";
import "styles/header.scss";
import { userInfo } from "data/userInfo";

const notifCaunt = 9; //it will be taken from DB and change dynamically in the future
const Header = () => {
  return (
    <div className="nav-bar">
     
        <img className="nav-bar__logo" src={logo} alt="#" />
        <div className="nav-bar__call">
          <img src={call} alt="" />
          <i>132</i>
        </div>
        <div className="nav-bar__search">
          <i style={{ position: "absolute", left: "15px", color: "#616173" }}>
            <AiOutlineSearch />
          </i>
          <input
            type="text"
            placeholder="Search"
            className="nav-bar__search-inp"
          />
        </div>
    
      <div>
      <ul className="nav-bar__list">
        <li>
          <a href="#path"><img src={scale} alt="#" /></a>
        </li>
        <li>
          <a href="#path"><img src={loan} alt="#" /></a>
        </li>
        <li style={{ borderRight: "1px solid rgba(0,0,0,0.1)" }}>
          <a  href="#path"><img src={security} alt="#" /></a>
        </li>
        <li>
          <a href="#path"><img src={share} alt="#" /></a>
        </li>
        <li>
          <a href="#path"><img src={settings} alt="#" /></a>
        </li>
        <li>
          <a href="#path"><img src={messages} alt="#" /></a>
        </li>
        <li style={{ position: "relative" }}>
          <a href="#path"><img src={notification} alt="#" /></a>
          <div className="number-notif">
            <span style={{ position: "absolute", top: "1px", left: "4.5px" }}>
              {notifCaunt}
            </span>
          </div>
        </li>
      </ul>
      </div>
    <div>
    <p style={{marginBottom:'5px'}}><b>{userInfo.name} {userInfo.surname}</b></p>
    <p style={{fontWeight:400, color:"#616173",fontSize:'13px'}}>{userInfo.company}, {userInfo.position}</p>
    </div>
    <div className="nav-bar__logout">
    <img src={logout} alt="#" className="nav-bar__logout-icon"/>
    </div>  
    </div>
  );
};

export default Header;
