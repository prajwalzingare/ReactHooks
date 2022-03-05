import React, { useState } from "react"; //we import use state by writing usestate in braces.

export default function HookCounter() {
  //hooks are function so we call them.
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>counter{}</h1>
      <button onClick={increse}>Click to increse</button>
    </div>
  );
}
