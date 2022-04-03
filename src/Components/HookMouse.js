import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";

export default function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const movemouse = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  // useefect accept the function as argument.and another parameter should be the empty array.to stop rerendering useefect hook
  useEffect(() => {
    console.log("prajwal");
    window.addEventListener("mousemove", movemouse);
    //humne ku clean up function likha kuki apne ko jo warning aa rahi thi ki function run ho raha haii memory me usko clean karne ke liye. class component me usko componentwillunmount ki help se karsakte the.
    return function cleanup() {
      console.log("removed Sucessfully");
        console.log("removed Sucessfully");
      window.removeEventListener("mousemove", movemouse);
    };
  }, []); //you are basically telling react hey this perticular efect does not depend on any props or state so there is no reason to call on rerender . so react reolies you only want to call this on initial rendering i can do that.
  return (
    <div>
      x-{x} Y-{y}
    </div>
  );
}
