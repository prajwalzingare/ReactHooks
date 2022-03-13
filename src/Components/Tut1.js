import React, { useState } from "react";

const Tut1 = () => {
  const [name, setName] = useState("prajwal zingare");

  //   console.log(useState(5)); if you console the usestate only then it shows it is function and if you put initial value in it it is going to show given value

  const changename = () => {
    if (name === "prajwal zingare") {
      setName("satvic");
    } else {
      setName("prajwal zingare");
    }
    // val = "satvic Boy";
    // console.log(val);
    // setName("satvic");
  };
  const changenamer = () => {
    setName("prajwal");
  };
  //   console.log(val);
  return (
    <div>
      <h1>{name}</h1>
      {/* one mistake i did id that i try to use this keyword for grabe the function but this is not class component so we cnat do that we have to use only name of function */}
      <button onClick={changename}>Click Me</button>
      <button onClick={changenamer}>Click Me to reset</button>
    </div>
  );
};

export default Tut1;
