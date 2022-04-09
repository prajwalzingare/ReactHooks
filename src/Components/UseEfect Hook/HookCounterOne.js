import React, { useState, useEffect } from "react";
//must visit for more info about changing title - https://devdojo.com/krissanawat101/3-ways-to-set-a-document-title-in-react
//link of officiall document-https://reactjs.org/docs/hooks-effect.html
function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  //useefect to the same work as componentdidmount and componentdidupdate.

  // must go through this link-https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  useEffect(() => {
    //we are requesting the react to execute the function which we have pass as an argument every time component render.
    //it runs after every render and every update just like componentdidmount and componentwillupdate.
    //useefect runs after every render.
    //useefect place inside the component.due to this we can acess the variables easily which is place in component
    document.title = `You clicked ${count} times`;
    console.log("prajwal");
  }, [count]); // Only re-run the effect if count changes.Array of value that depends on.
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
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
