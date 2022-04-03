//This tut is from Thapa Technical-https://www.youtube.com/watch?v=W-Eaumm9yjQ&ab_channel=ThapaTechnical

import React, { useState, useEffect } from "react";

export default function UseEfect1() {
  const [count, setCount] = useState(0); //ye usestate component ko rerender kar raha tha or useefect ko bar bar chala rhaha hai.
  const increse = () => {
    setCount(count + 1);
  };
  //What is array dependancy list? can you ellaborate it-- so dependancy list means jub apka component render hoga 1st time too useefect jarur chalega ek bar isliye else print hua but joki apne dependancy array diya iski vajese component specific function run hone par hi run hoga var rerun nahi hoga.
  //We can use multiple use effect
  useEffect(() => {
    if (count >= 1) {
      console.log("clicked");
      document.title = `chats (${count}) yup`;
    } else {
      console.log("else"); //1st time render hoga kuki condition satisfied hogi.
      document.title = `chats `;
    }
  }, [count]); //jub pahli bar or sirf ek bar component render kar na hai to balnk array dijiye.so pure dom me apneko sirf count change hone par useefect run karvana hai to fir [count] likhiye.so aisa likhne par kya hoga ki jub jub count change hoga tub tub useefect chalega.

  useEffect(() => {
    if (count >= 1) {
      console.log("clicked");
      document.title = `chats (${count}) `;
    } else {
      console.log("else"); //1st time render hoga kuki condition satisfied hogi.
      document.title = `chats `;
    }
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increse}>click</button>
    </div>
  );
}
