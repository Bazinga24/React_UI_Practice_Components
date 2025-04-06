import React, { useEffect } from "react";
import "./Counter.css";
import { useState } from "react";
import Log from "./Log";
function Counter() {
  //state management
  const [counterValue, setCounterValue] = useState(0);
  const [history, setHistory] = useState([]);
  const [currActions, setCurrActions] = useState([]);
  const [results, setResults] = useState([]);
  const [clickTimes, setClickTimes] = useState(0);

  // function to insert the actions
  const resultHandler = () => {
    if (currActions.length) {
      const currentVal = counterValue;
      const prevVal = currActions[currActions.length - 1];
      let action = currentVal - prevVal;
      if (action >= 0) {
        action = "+" + action;
      }
      setCurrActions((prev) => [...prev, currentVal]);
      setResults((prev) => [
        ...prev,
        { currVal: currentVal, prevVal: prevVal, action: action },
      ]);
    } else {
      setCurrActions((prev) => [...prev, counterValue]);
    }
  };

  // function to Redo Things
  const redoHandler = () => {
    if (history.length) {
      const redoValue = history[history.length - 1];
      let action = redoValue.removedValue - redoValue.removedValuePrev;
      if (action >= 0) {
        action = "+" + action;
      }
      //..............
      setCounterValue(() => redoValue.removedValue);
      //...................
      setHistory((prev) => prev.slice(0, -1));
      //.........................
      setCurrActions((prev) => [...prev, redoValue.removedValue]);
      //.......................
      setResults((prev) => [
        ...prev,
        {
          currVal: redoValue.removedValue,
          prevVal: redoValue.removedValuePrev,
          action: action,
        },
      ]);
    }
  };
  // function to Undo Things
  const undoHandler = () => {
    if (currActions.length >= 3) {
      const removedValue = results[results.length - 1].currVal;
      const removedValuePrev = results[results.length - 1].prevVal;
      const action = results[results.length - 1].action;
      //...............
      setCounterValue((prev) => removedValue - action);
      //.................
      setCurrActions((prev) => prev.slice(0, -1));
      //....................
      setResults((prev) => prev.slice(0, -1));
      //....................
      setHistory((prev) => [
        ...prev,
        { removedValue: removedValue, removedValuePrev: removedValuePrev },
      ]);
    }
    console.log(currActions);
    console.log(currActions.length);
  };

  // functiom to add Counter Values
  const clickHandler = (value) => {
    setCounterValue((prev) => prev + value);
    setClickTimes((prev) => prev + 1);
  };

  useEffect(() => {
    resultHandler();
  }, [clickTimes]);

  return (
    <>
      <div className="counter-container">
        <h1>Undoable Counter</h1>
        <div className="undo-redo">
          <button className="counter-button" onClick={undoHandler}>
            Undo
          </button>
          <button className="counter-button" onClick={redoHandler}>
            Redo
          </button>
        </div>
        <div className="counter-content">
          <div className="counter-buttons">
            <button
              className="counter-button"
              onClick={() => {
                clickHandler(-100);
              }}
            >
              -100
            </button>
            <button
              className="counter-button"
              onClick={() => {
                clickHandler(-10);
              }}
            >
              -10
            </button>
            <button
              className="counter-button"
              onClick={() => {
                clickHandler(-1);
              }}
            >
              -1
            </button>
          </div>
          <h1>{counterValue}</h1>
          <div className="counter-buttons">
            <button
              className="counter-button"
              onClick={() => {
                clickHandler(1);
              }}
            >
              +1
            </button>
            <button
              className="counter-button"
              onClick={() => {
                clickHandler(10);
              }}
            >
              +10
            </button>
            <button
              className="counter-button"
              onClick={() => {
                clickHandler(+100);
              }}
            >
              +100
            </button>
          </div>
        </div>
      </div>
      <Log data={results} />
    </>
  );
}

export default Counter;
