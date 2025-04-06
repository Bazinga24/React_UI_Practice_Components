import React, { useRef } from "react";
import "./Traffic.css";
import { useState, useEffect } from "react";

function Traffic() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="traffic-container">
        <div className="traffic-lights" id={value === 0 ? "red" : ""}></div>
        <div className="traffic-lights" id={value === 1 ? "yellow" : ""}></div>
        <div className="traffic-lights" id={value === 2 ? "green" : ""}></div>
      </div>
    </>
  );
}

export default Traffic;
