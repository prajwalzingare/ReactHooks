import React, { useReducer } from "react";
//declear the initial state.
const initialState = 0;

//Now its time to define reducer function.
//This function accept two arguments and return one value.
const reducer = (state, action) => {
  // return newstste
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;

    default:
      return state;
  }
};
function CounterOne() {
  //   const [count, setCount] = useState(0);
  //usereducer is also a function so we have to call it in function.
  //Usereducer accept two arguments reducer fuction and initial state.
  //they are not define so we have to define them outside the component.
  //Initial state is zero as per usestate
  const [count, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch("increment");
  };
  const decrement = () => {
    dispatch("decrement");
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterOne;
