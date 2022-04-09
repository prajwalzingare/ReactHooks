//link for more info-https://youtu.be/5DsCKNRA8s4
//multiple use Reducer Hook

import React, { useReducer } from "react";
let initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialstate;
    default:
      return state;
  }
};
function Counter3() {
  const [count, dispatch] = useReducer(reducer, initialstate);
  const [count2, dispatch2] = useReducer(reducer, initialstate);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch("Increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>

      <div>
        <h1>{count2}</h1>
        <button
          onClick={() => {
            dispatch2("Increment");
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch2("decrement");
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch2("reset");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter3;
