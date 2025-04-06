import React from "react";
import "./DigitalClock.css";
import { useEffect, useState } from "react";
function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const timeTransform = (time) => {
    let afterText = "AM";
    let hour = time.getHours();
    let minute = time.getMinutes();
    let secconds = time.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    secconds = secconds < 10 ? "0" + secconds : secconds;

    if (hour > 12) {
      hour = hour - 12;
      afterText = "PM";
    }

    return {
      hours: hour,
      minutes: minute,
      seconds: secconds,
      afterText: afterText,
    };
  };

  const refinedTime = timeTransform(time);
  return (
    <>
      <h2 id="title">Digital Clock</h2>
      <div className="clock-container">
        <span>{refinedTime.hours}</span>
        <span>:</span>
        <span>{refinedTime.minutes}</span>
        <span>:</span>
        <span>{refinedTime.seconds}</span>
        <span id="after-text">{refinedTime.afterText}</span>
      </div>
    </>
  );
}

export default DigitalClock;
