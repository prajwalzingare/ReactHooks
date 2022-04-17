import React, { useState } from "react";
import useDocumentT from "../Hooks/useDocumentT";
console.log("one");
function DocTitleOne() {
  console.log("Three");
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

export default DocTitleOne;
