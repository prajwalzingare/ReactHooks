// Link for more understaanding-https://www.google.com/url?sa=i&url=https%3A%2F%2Fhelpezee.wordpress.com%2F2021%2F06%2F13%2Fusereducer-react-hook%2F&psig=AOvVaw3__kDpBtmu0HpbIpKzSCNp&ust=1649559069113000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCMCFvcX8hfcCFQAAAAAdAAAAABA7
// 2)https://pbs.twimg.com/media/E3sCMfaWQAEaOF7?format=jpg&name=large

//this is simple reducer hook example tut 19 codeevolution.

import React, { useReducer } from "react";
const initialState = 1;
//action is like what to do i.e action
//count=state(prvious state of component it store), action=reducer hear
//count accept previous state and performe the action that triggers new component
//as state changes and component gets render.
//state is not object but it is numeric value hear
//action is straight forward string rather than object properties.
const reducer = (count, action) => {
  switch (action) {
    case "increment":
      return count + 1;

    case "decrement":
      return count - 1;
    case "reset":
      return initialState;

    default:
      return count;
  }
};
function Counter1() {
  //initialstate=count,dispatch=reducer which trigers after click and pass the actionto reducer fuction that we define above.
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch("increment");
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
        reset
      </button>
    </div>
  );
}

export default Counter1;
