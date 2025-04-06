import React from "react";

function Log({ data }) {
  const revData = [...data];
  revData.reverse();
  return (
    <div className={revData.length ? "log-container" : ""}>
      {revData.map((item, index) => (
        <p key={index}>
          {item.action + "  " + "(" + item.prevVal + "-->" + item.currVal + ")"}
        </p>
      ))}
    </div>
  );
}

export default Log;
