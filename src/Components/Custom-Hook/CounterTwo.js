import React, { useState } from "react";
import UseCounter from "../Hooks/UseCounter";
function CounterTwo() {
  const [increment, decrement, reset, count] = UseCounter(0, 1);
  return (
    <div>
      <h1>counter={count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterTwo;
