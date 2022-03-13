import React, { useState } from "react";

function HookCounterTwo() {
  const initial = 0;
  const [count, setCount] = useState(initial);

  const Increment5 = () => {
    //without incrementing directly by 5 we loop through this 5 times and run the for loop by giving condition.
    for (let i = 0; i < 5; i++) {
      //if we use count+1 like this it is not proper method to update state it could be risky.
      // setCount(count + 1);
      //now we pass the function which have acess to old state value and increment by one and it will increse by 5 after lopping through for loop.
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <h1>count: {count}</h1>
      <button
        onClick={() => {
          //   setCount(count + 1);
          setCount((prevCount) => prevCount + 1);
        }}
      >
        increse
      </button>

      <button
        onClick={() => {
          //   setCount(count - 1);
          setCount((prevCount) => prevCount - 1);
        }}
      >
        decrese
      </button>

      <button
        onClick={() => {
          setCount(initial);
        }}
      >
        Reset
      </button>
      <button onClick={Increment5}>Increment by 5</button>
    </div>
  );
}

export default HookCounterTwo;
