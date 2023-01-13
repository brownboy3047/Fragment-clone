import React from "react";
import { useConnect } from "../hooks/useConnect";
import { Link } from "react-router-dom";

//style
import "./Numbers.css";

function Numbers() {
  const { openModal, setOpenModal } = useConnect();
  return (
    <div className="numbers" onClick={() => setOpenModal(!openModal)}>
      <Link to="#">Numbers</Link>

      <small>New</small>
    </div>
  );
}

export default Numbers;
