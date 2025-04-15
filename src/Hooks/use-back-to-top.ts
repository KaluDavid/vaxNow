import React from "react";
import SCROLL_TO_TOP from "../utils/SCROLL_TO_TOP.ts";
function useBackToTop() {
  const toTop = React.useRef(null);
  React.useEffect(() => {
    SCROLL_TO_TOP();
  }, []);
  return toTop;
}

export default useBackToTop;
