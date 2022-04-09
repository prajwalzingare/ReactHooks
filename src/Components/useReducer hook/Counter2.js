import React, { useReducer } from "react";
//link to visit  for info-https://youtu.be/uX7lxFrWUbA
//whta is the use of this type of syntax.why to use object as state and action.
//because we can add multiple properties at one time.
//converting the initial stae into object state.
const initialState = { firstCounter: 0, secondCounter: 10 };
//Hear we will learn how to use state object and action object in useReducer hook.
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      //action.value se badhe ga count got the point.
      //spread opeartor in file hookcounterthree.js usestate.
      return { ...state, firstCounter: state.firstCounter + action.value };

    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };

    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;

    default:
      return state;
  }
};
function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>firstcounter-{count.firstCounter}</div>
      <div>secondcounter-{count.secondCounter}</div>
      <button
        onClick={() => {
          //convert action into object
          dispatch({ type: "increment", value: 1 });
        }}
      >
        Increment 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        Decrement 1
      </button>
      <button
        onClick={() => {
          //convert action into object
          dispatch({ type: "increment2", value: 1 });
        }}
      >
        Increment 2
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement2", value: 1 });
        }}
      >
        Decrement 2
      </button>
      <button
        onClick={() => {
          //convert action into object
          dispatch({ type: "increment", value: 5 });
        }}
      >
        Increment 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 5 });
        }}
      >
        Decrement 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
    </div>
  );
}

export default Counter2;
