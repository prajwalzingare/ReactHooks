import React, { useState } from "react"; //we import use state by writing usestate in braces.

export default function HookCounter() {
  //hooks are function so we call them.and give initial value as argument
  const [count, setCount] = useState(0); //this syntax is called as array destructuring.
  return (
    <div>
      <h1>counter {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click to increse
      </button>
    </div>
  );
}
//Rules for react Hooks-1)only call hooks at the top level.
// Dont call hooks inside loops condition or nested function.
//2)only call hooks from react function.
