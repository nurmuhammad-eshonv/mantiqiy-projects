import { useState } from "react";
import React from "react";
import { RiIncreaseDecreaseFill } from "react-icons/ri";
function Calkulator() {
  const [counterState, setCounterState] = useState(0);
  function handleIncrement() {
    setCounterState(counterState + 1);
  }
  function handledecrement() {
    if (counterState > 0) {
      setCounterState(counterState - 1);
    }
  }
  return (
    <div className="calc-wr">
 <RiIncreaseDecreaseFill className="increment"/>
      <h1 className="">{counterState}</h1>

      <button className="btn-i" onClick={handledecrement}>
        -
      </button>
      <button className="btn-i" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default Calkulator;
