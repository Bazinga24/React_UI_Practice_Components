import React from "react";
import { useState } from "react";
import "./Rating.css";
function Rating() {
  const starArray = new Array(5);
  starArray.fill("star", 0, 5);
  const [colorUpto, setColorUpto] = useState(-1);
  const [hoverUpto, setHoverUpto] = useState(-1);

  const clickHandler = (index) => {
    setColorUpto(index);
  };

  const enterHandler = (index) => {
    setHoverUpto(index);
  };

  const leaveHandler = (index) => {
    setHoverUpto(-1);
  };
  return (
    <>
      <div className="rating-container">
        {starArray.map((value, index) => (
          <span
            key={index}
            className="star"
            onClick={() => clickHandler(index)}
            onMouseEnter={() => enterHandler(index)}
            onMouseLeave={() => leaveHandler(index)}
            id={
              (colorUpto >= index && hoverUpto == -1) || hoverUpto >= index
                ? "active"
                : ""
            }
          >
            &#9733;
          </span>
        ))}
      </div>
    </>
  );
}
export default Rating;
