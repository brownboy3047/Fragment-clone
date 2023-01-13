import React from "react";

//material ui
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SystemSecurityUpdateGoodOutlinedIcon from "@mui/icons-material/SystemSecurityUpdateGoodOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import CloseIcon from "@mui/icons-material/Close";

//style
import "./MenuBar.css";

function MenuBar({ showMenu }) {
  return (
    <div className="menubar">
      {showMenu && <CloseIcon />}
      <h4>PLATFORM</h4>

      <div className="menubar-list">
        <InfoOutlinedIcon />
        <span>About</span>
      </div>

      <div className="menubar-list">
        <SystemSecurityUpdateGoodOutlinedIcon />
        <span>Terms</span>
      </div>

      <div className="menubar-list">
        <VerifiedUserOutlinedIcon />
        <span>PrivacyPolicy</span>
      </div>
    </div>
  );
}

export default MenuBar;
