import React, { useState } from "react";

export const UseStateArray = () => {
  const bioData = [
    {
      id: 0,
      myName: "prajwal",
      age: 23,
    },
    {
      id: 1,
      myName: "sami",
      age: 20,
    },
    {
      id: 2,
      myName: "prajwal",
      age: 20,
    },
  ];

  const [myArray, setmyArray] = useState(bioData); //it prints initial value after that we have to set new value for rendering the component.
  const clearArray = () => {
    // bioData = [];
    setmyArray([]); //updated value or new value
  };

  return (
    <>
      {myArray.map((cure) => {
        return (
          <h1>
            Name:{cure.myName} & Age:{cure.age}
            {/* {console.log(cure)} */}
          </h1>
        );
        // console.log(currelement);
        // console.log(index);
        // console.log(arr);
      })}
      <button onClick={clearArray}>Clear Data</button>
    </>
  );
};
