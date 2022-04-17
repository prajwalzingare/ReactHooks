import { useState } from "react";

function UseCounter(initialcount = 0, value) {
  const [count, setCount] = useState(initialcount);

  const increment = () => {
    setCount(count + value);
  };

  const decrement = () => {
    setCount(count - value);
  };
  const reset = () => {
    setCount(initialcount);
  };
  //we should pass array in return for passing functionality between component.
  return [increment, decrement, reset, count];
}

export default UseCounter;
