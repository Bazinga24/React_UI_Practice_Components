import React from "react";
import { useState } from "react";
import Question from "./Question";

function FAQ({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div key={item.question} className="question-box">
          <Question item={item} index={index} />
        </div>
      ))}
    </>
  );
}

export default FAQ;
