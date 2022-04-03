import React, { useState } from "react";
import ClassMouse from "./ClassMouse";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true); //iski initial value true rahegi iski vajese apneko oo component render hota hua dikhayidega. But jaise hi apan button pe click karte hai vaise hi oo component gayab ho jayega.
  return (
    <div>
      <button
        onClick={() => {
          setDisplay(false); //we can write !display also hear to not showing display or render the component.
        }}
      >
        Toggle Display
      </button>

      {/* {display && <HookMouse />} */}
      {display && <ClassMouse />}
    </div>
  );
}
// {display && <HookMouse />} //(if this part is true) && (this part will execute) meaning of upper condition
//one for class component and another for function component i.e is hook useefect hook.
//memory lik hone se bachana hai kuki website hang ho sakti hai.rerendering ki vajese so componentwillunmount ya fir return cleanup function in hooks.
export default MouseContainer;
