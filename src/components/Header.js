import React, { useState } from "react";
import { Link } from "react-router-dom";

//components
import Usernames from "./Usernames";
import Numbers from "./Numbers";
import Connect from "./Connect";

//logo
import logo from "../assets/fragment-logo.png";

//material ui
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SystemSecurityUpdateGoodOutlinedIcon from "@mui/icons-material/SystemSecurityUpdateGoodOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

//style
import "./Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="header">
      <div className="header-left">
        <Link className="header-left-link">
          <img src={logo} alt="fragment logo" />
          <p>FRAGMENT</p>
        </Link>
      </div>

      <div className="header-middle">
        <Usernames />

        <Numbers />
      </div>

      <div className="header-right">
        <Connect />
      </div>

      <div className="header-menu" onClick={() => setShowMenu(!showMenu)}>
        {!showMenu && <MenuIcon className="header-menu-icon" />}
      </div>

      {/* the menu bar */}
      <div className="header-menu-lists" id={showMenu ? "menu" : ""}>
        <div
          className="header-menu-lists-icon"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu && <CloseIcon />}
        </div>

        <h4>PLATFORM</h4>

        <div className="header-menu-list">
          <InfoOutlinedIcon />
          <span>About</span>
        </div>

        <div className="header-menu-list">
          <SystemSecurityUpdateGoodOutlinedIcon />
          <span>Terms</span>
        </div>

        <div className="header-menu-list">
          <VerifiedUserOutlinedIcon />
          <span>PrivacyPolicy</span>
        </div>

        <div className="header-menu-lists-connect">
          <p>Connect TON and Telegram to view your bids and assets </p>

          <div>
            <Connect />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
