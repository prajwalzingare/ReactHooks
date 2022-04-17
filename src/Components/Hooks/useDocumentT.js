import { useEffect } from "react";

function useDocumentT(count) {
  useEffect(() => {
    console.log("run");
    document.title = `count-${count}`;
  }, [count]);
}

export default useDocumentT;
