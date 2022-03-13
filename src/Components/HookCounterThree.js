import React, { useState } from "react";

export default function HookCounterThree() {
  // You Know what is state variable the variable in state who store the value.
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => {
          setName({ ...name, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => {
          setName({ ...name, lastName: e.target.value });
        }}
      />
      <h2>Your first name is-{name.firstName}</h2>
      <h2>Your last name is-{name.lastName}</h2>
      {/* by default json.stringify   You know one thing usestate does not aoutomatically merge and update But in class component setstate merge the state wher as usestate will not merge the state But it is possible with spread operator. */}
      {/* usestate does not auotomatically merge and update object use spread operator */}
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}
