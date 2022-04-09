import "./App.css";
import React, { useReducer, useContext } from "react";
import ComponentA from "./Components/useReducer hook/ComponentA";
import ComponentB from "./Components/useReducer hook/ComponentB";
import ComponentC from "./Components/useReducer hook/ComponentC";
// import ClassCounterOne from "./Components/ClassCounterOne";
// import ClassMouse from "./Components/ClassMouse";
// import DataFetching from "./Components/DataFetching";
// import HookCounterFour from "./Components/HookCounterFour";
// import HookCounterOne from "./Components/HookCounterOne";
// import ClassCounter from "./Components/ClassCounter";
// import HookCounterThree from "./Components/HookCounterThree";
// import HookMouse from "./Components/HookMouse";
// import IntervalClassCounter from "./Components/IntervalClassCounter";
// import IntervalHookCounter from "./Components/IntervalHookCounter";
// import MouseContainer from "./Components/MouseContainer";
// import HookCounter from "./Components/HookCounter";
// import HookCounterTwo from "./Components/HookCounterTwo";
// import Tut1 from "./Components/Tut1";
// import ComponentC from "./Components/usecontext/ComponentC";
// import UseEfect1 from "./Components/UseEfect1";
// import UseEffect2 from "./Components/UseEffect2";
// import { UseStateArray } from "./Components/UseStateArray";
// import CounterOne from "./Components/useReducer hook/CounterOne";
// import Counter from "./Components/useReducer hook/Counter";
// import Counter1 from "./Components/useReducer hook/Counter1";
// import Counter2 from "./Components/useReducer hook/Counter2";
// import Counter3 from "./Components/useReducer hook/Counter3";
// export const UserContext = React.createContext(); //this is must to write when you want to use usercontext
// export const ChannalContext = React.createContext();
// export const NameContext = React.createContext();
export const CountContext = React.createContext();
let initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialstate;

    default:
      break;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div className="App">
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <h1>count-{count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
      {/* <Counter3 /> */}
      {/* <Counter2 /> */}
      {/* <Counter1 /> */}
      {/* <Counter /> */}
      {/* <CounterOne /> */}
      {/* <UserContext.Provider value={"prajwal"}>
        <ChannalContext.Provider value={"zingare"}>
          <NameContext.Provider value={"Webdevloper"}>
            <ComponentC />
          </NameContext.Provider>
        </ChannalContext.Provider>
      </UserContext.Provider> */}
      {/* <UseEffect2 /> */}
      {/* <UseEfect1 /> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <IntervalClassCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <UseStateArray /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <Tut1 /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
    </div>
  );
}

export default App;
