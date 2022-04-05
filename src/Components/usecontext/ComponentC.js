import React, { useContext } from "react";
import ComponentE from "./ComponentE";
import { UserContext, ChannalContext, NameContext } from "../../App";
//more info about usercontext-https://www.w3schools.com/react/react_usecontext.asp
function ComponentC() {
  const user = useContext(UserContext);
  const channal = useContext(ChannalContext);
  const name = useContext(NameContext);
  return (
    <div>
      {user}={channal}=={name}
      <ComponentE />
    </div>
  );
}

export default ComponentC;
