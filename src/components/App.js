import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here

  const [remTime, setRemTime] = useState("");
  const [counterValue, setCounterValue] = useState("");

  function handleKeyDown(el) {
    if (el.keyCode === 13) {
      setCounterValue(() => {
        return Math.floor(counterValue);
      });

      if (Number.isNaN(counterValue)) {
        setCounterValue(0);
      }
      setRemTime(counterValue);

      setCounterValue("");
    }
  }

  function handleChange(el) {
    //console.log(el.target.value);
    setCounterValue(el.target.value);
  }

  useEffect(() => {
    //console.log("check");
    let intervalId = null;
    if (remTime > 0) {
      intervalId = setInterval(() => {
        setRemTime(() => {
          return remTime - 1;
        });
        //console.log("check");
      }, 1000);
    }

    if (remTime === 0) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [remTime]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            value={counterValue}
          />
        </h1>
      </div>
      <div id="current-time">{remTime <= 5 && remTime}</div>
    </div>
  );
};

export default App;
