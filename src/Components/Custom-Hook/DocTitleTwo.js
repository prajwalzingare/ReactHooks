import React, { useState } from "react";
import useDocumentT from "../Hooks/useDocumentT";
console.log("two");
function DocTitleTwo() {
  console.log("four");
  const [count, setCount] = useState(0);

  useDocumentT(count);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count-{count}
      </button>
    </div>
  );
}

export default DocTitleTwo;
