import React from "react";

function ModalElement({ modalCloseHandler, modalAcceptedHandler }) {
  return (
    <div
      className="modal"
      onClick={(e) => {
        if (e.target.className === "modal") {
          modalCloseHandler();
        }
      }}
    >
      <div className="modal-container">
        <button id="close-button" onClick={modalCloseHandler}>
          X
        </button>
        <div className="modal-content">
          <h3>Click the button below to accept our amazing offer ! </h3>
          <button className="page-button" onClick={modalAcceptedHandler}>
            Accept Offer
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalElement;
