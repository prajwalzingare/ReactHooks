import React, { useMemo, useState } from "react";
//usememo and usecallback is same hook
//if you need to cached the function use callback and if you need to cached the value use usememo hook
function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  //it boost the performance by not rerendering the coponnent which is not depend on dependancy array.
  const even = useMemo(() => {
    //due to this side gets slow and performn]ance issues gets arrised so it should not have reder again and again.
    //every time component rerender iseven also gets executed and run the whole function which is not of use and creates performance issue.
    let i = 0;
    while (i < 2000000) i++;
    console.log("run");
    if (counterOne % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }, [counterOne]);

  return (
    <div>
      <h1>{counterOne}</h1>
      <span>{even}</span>
      <br />
      <button onClick={incrementOne}>counter one</button>
      <h1>{counterTwo}</h1>
      <button onClick={incrementTwo}>counter two</button>
    </div>
  );
}

export default Counter;
