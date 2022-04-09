import React, { useReducer } from "react";
//reducer is pure function.it means it does not produce any side effects.

//reducer take 2 parameter state and action
const initialState = 0;
//action ko kaise pata chalega by type of action.
const reducer = (state, action) => {
  // switch (action.type) {
  //   case "INCREMENT":
  //     // console.log(state + 1);
  //     return state + 1;
  //   case "DECREMENT":
  //     return state - 1;
  //   default:
  //     throw new Error();
  // }
  //2ND OPTION TO WRITE SAME CODE.
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }

  // console.log(state, action); //state initial and action is increment type or decrement
  // return state;
};

function Counter() {
  //   const [count, setCount] = useState(0);
  //dispatch ka kam hai to trigger action in reducer function.
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
