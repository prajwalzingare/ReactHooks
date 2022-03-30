import React, { useState, useEffect } from "react";
//must visit for more info about changing title - https://devdojo.com/krissanawat101/3-ways-to-set-a-document-title-in-react
function HookCounterOne() {
  const [count, setCount] = useState(0);
  //useefect to the same work as componentdidmount and componentdidupdate
  useEffect(() => {
    //we are requesting the react to execute the function which we have pass as an argument every time component render.
    //it runs after every render and every update just like componentdidmount and componentwillupdate.
    //useefect runs after every render.
    //useefect place inside the component.due to this we can acess the variables easily which is place in component
    document.title = `You clicked ${count} times`;
    console.log("prajwal");
  });
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click {count} times
      </button>
    </div>
  );
}

export default HookCounterOne;
