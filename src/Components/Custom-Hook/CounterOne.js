import React, { useState } from "react";
import UseCounter from "../Hooks/UseCounter";

function CounterOne() {
  const [increment, decrement, reset, count] = UseCounter(10, 10);
  return (
    <div>
      <h1>counter={count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterOne;
