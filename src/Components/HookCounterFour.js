import React, { useState } from "react";

function HookCounterFour() {
  const [item, setItem] = useState([]); //destructure items and setitems
  const addItem = () => {
    //Idher apne ko value pass karna padega array ko set karne ke
    setItem([
      ...item,
      {
        id: item.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]); //this is setter function which does not merge and update and does not apend value at the end of array so we have to add manually by using spread operator
    // console.log("prajwal");
  };

  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {item.map((item) => (
          <li key={item.id}>
            {item.value}
            {console.log(item.id)};
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterFour;
