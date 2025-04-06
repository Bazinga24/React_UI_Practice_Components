import React from "react";
import { useState } from "react";
function Item({ name, deleteHandler }) {
  const [buttonVisible, setButtonVisible] = useState(false);
  const changeHandler = (e) => {
    if (buttonVisible) {
      setButtonVisible(false);
      return;
    }
    setButtonVisible(true);
  };

  return (
    <>
      <div className="container">
        <input type="checkbox" onClick={changeHandler} />
        <p>{name}</p>
        {buttonVisible && (
          <button
            onClick={() => {
              deleteHandler(name);
            }}
          >
            Delete
          </button>
        )}
      </div>
    </>
  );
}

export default Item;
