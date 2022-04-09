import "./App.css";
import React from "react";
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
import ComponentC from "./Components/usecontext/ComponentC";
// import UseEfect1 from "./Components/UseEfect1";
// import UseEffect2 from "./Components/UseEffect2";
import { UseStateArray } from "./Components/UseStateArray";
import CounterOne from "./Components/CounterOne";
import Counter from "./Components/useReducer hook/Counter";
import Counter1 from "./Components/useReducer hook/Counter1";
import Counter2 from "./Components/useReducer hook/Counter2";
export const UserContext = React.createContext(); //this is must to write when you want to use usercontext
export const ChannalContext = React.createContext();
export const NameContext = React.createContext();
function App() {
  return (
    <div className="App">
      <Counter2 />
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
