import React from "react";
import { useState } from "react";
function Item({ removeHandler, item }) {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="item-container">
      <button id="tick-button" onClick={checkHandler}>
        ✔
      </button>
      <p id={isChecked ? "id-text" : ""}>{item}</p>
      <button
        onClick={() => {
          removeHandler(item);
        }}
      >
        ❌
      </button>
    </div>
  );
}

export default Item;
