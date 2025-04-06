import React, { useState } from "react";
import "./MortageEmi.css";
function MortageEmi() {
  const [inputValue, setInputValue] = useState({
    principle: null,
    rate: null,
    years: null,
  });
  const [result, setResult] = useState(null);
  const changeHandler = (e) => {
    setInputValue((prev) => {
      return { ...prev, [e.target.name]: parseInt(e.target.value) };
    });
  };
  const clickHandler = () => {
    console.log(inputValue);
    const p = inputValue.principle;
    const r = inputValue.rate / 100 / 12;
    const n = inputValue.years * 12;
    if (p && n && r) {
      const numerator = r * Math.pow(1 + r, n);
      const denominator = Math.pow(1 + r, n) - 1;
      const result = (numerator / denominator) * p;
      setResult(result.toFixed(0));
    }
  };
  return (
    <div>
      <div id="mortage-container">
        <div className="input-container">
          <label>Principal Loan Amount</label>
          <input type="number" onChange={changeHandler} name="principle" />
        </div>
        <div className="input-container">
          <label>Interest Rate</label>
          <div>
            <input type="number" onChange={changeHandler} name="rate" />
            <label>%</label>
          </div>
        </div>
        <div className="input-container">
          <label>Length of Loan</label>
          <div>
            <input type="number" onChange={changeHandler} name="years" />
            <label>Years</label>
          </div>
        </div>

        <div className="input-container">
          <button id="submit-button" onClick={clickHandler}>
            Calculate
          </button>
          {setResult && (
            <h2 id="result">Your monthly Mortage Payment will be {result}$</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default MortageEmi;
