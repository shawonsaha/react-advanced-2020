import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    setValue(value - 1);
  };

  const reset = () => {
    setValue(0);
  };
  return (
    <>
      <h1>Click Counter</h1>
      <h2>{value}</h2>
      <button className="btn" onClick={() => decrease()}>
        Decrease
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
      <button className="btn" onClick={() => increase()}>
        Increase
      </button>
    </>
  );
};

export default UseStateCounter;
