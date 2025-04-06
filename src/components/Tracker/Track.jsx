import React from "react";
import "./Track.css";
import { useState } from "react";
const trackerItems = [
  { item: "Ordered", text: "Your has been placed", id: 1 },
  { item: "Shipped", text: "Your has been shipped", id: 2 },
  { item: "Delivered", text: "Your has been delivered", id: 3 },
];

function Track() {
  const [trackVal, setTrackVal] = useState(1);
  const [progress, setProgess] = useState(0);
  const nextHandler = () => {
    if (trackVal < 3) {
      setTrackVal((prev) => prev + 1);
      setProgess((prev) => prev + 50);
    }
  };
  const backHandler = () => {
    if (trackVal > 1) {
      setTrackVal((prev) => prev - 1);
      setProgess((prev) => prev - 50);
    }
  };
  return (
    <>
      <h1>Track your order</h1>
      <div className="track-container">
        {trackerItems.map((value, index) => (
          <div key={index} className="track-component ">
            <h2 id={trackVal >= value.id ? "completed-background" : ""}>
              {value.id}
            </h2>
            <p id={trackVal >= value.id ? "completed-text" : ""}>
              {value.item}
            </p>
          </div>
        ))}
      </div>
      <div className="progress">
        <div
          className="progress-filled"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {trackVal != 3 && (
        <div>
          <button id="track-button" onClick={nextHandler}>
            Next
          </button>
          <button id="track-button" onClick={backHandler}>
            Back
          </button>
        </div>
      )}
      {trackVal === 3 && (
        <h2 className="sucess-message">Your Order is Placed Sucessfully !</h2>
      )}
    </>
  );
}

export default Track;
