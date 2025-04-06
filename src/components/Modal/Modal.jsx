import React from "react";
import { useState } from "react";
import "./Modal.css";
import ModalElement from "./ModalElement";
function Modal() {
  const [isHidden, setIsHidden] = useState(true);
  const [isAccepted, setIsAccepted] = useState(false);

  const clickHandler = () => {
    setIsHidden(false);
  };
  const modalCloseHandler = () => {
    setIsHidden(true);
  };

  const modalAcceptedHandler = () => {
    setIsAccepted(true);
    setIsHidden(true);
  };
  return (
    <div id="page-container">
      {isHidden && !isAccepted && (
        <button className="page-button" onClick={clickHandler}>
          Show Offer
        </button>
      )}
      {!isHidden && (
        <ModalElement
          modalCloseHandler={modalCloseHandler}
          modalAcceptedHandler={modalAcceptedHandler}
        />
      )}
      {isAccepted && <h1>Offer Accepted !</h1>}
    </div>
  );
}

export default Modal;
