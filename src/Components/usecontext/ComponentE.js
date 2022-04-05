import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannalContext, NameContext } from "../../App.js";
function ComponentE() {
  const user = useContext(UserContext);
  const chhanal = useContext(ChannalContext);
  const name = useContext(NameContext);

  return (
    <div>
      {user} - {chhanal}-{name}
      <ComponentF />
    </div>
  );
}

export default ComponentE;
