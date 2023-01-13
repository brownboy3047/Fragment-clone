import React from "react";
import { useConnect } from "../hooks/useConnect";

//style
import "./Connect.css";

//material UI
import TelegramIcon from "@mui/icons-material/Telegram";
// import TonLogo from "../assets/ton-icon.png";

function Connect() {
  const { openModal, setOpenModal } = useConnect();
  return (
    <div className="connect" onClick={() => setOpenModal(!openModal)}>
      <div className="connect-one">
        <TelegramIcon className="telegram-icon" />
        <p>Connect Telegram</p>
      </div>

      <div className="connect-two" onClick={() => setOpenModal(!openModal)}>
        <TelegramIcon className="telegram-icon" />
        {/* <img src={TonLogo} alt="ton icon" width="35" /> */}
        <p>Connect TON</p>
      </div>
    </div>
  );
}

export default Connect;
