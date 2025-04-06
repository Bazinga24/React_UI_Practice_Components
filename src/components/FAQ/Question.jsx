import React, { useEffect } from "react";
import { useState } from "react";
function Question({ item, index }) {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (index === 0) {
      setHidden(false);
    }
  }, []);

  const clickHandler = () => {
    setHidden(!hidden);
  };
  return (
    <>
      <div id="question-container">
        <button onClick={clickHandler} className={hidden ? "" : "arrow"}>
          --
        </button>
        <h3 id="question" onClick={clickHandler}>
          {item.question}
        </h3>
      </div>
      <h4 id={hidden ? "hidden" : "visible"}>{item.answer}</h4>
    </>
  );
}

export default Question;
