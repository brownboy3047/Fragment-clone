import React from "react";
import { useConnect } from "../hooks/useConnect";
import { Link } from "react-router-dom";

//styles
import "./Usernames.css";

function Usernames() {
  const { openModal, setOpenModal } = useConnect();
  return (
    <div className="usernames" onClick={() => setOpenModal(!openModal)}>
      <Link className="active" to="#">
        Usernames
      </Link>
    </div>
  );
}

export default Usernames;
