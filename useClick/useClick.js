import React, { useEffect, useRef } from "react";

/**
 *
 * @param {function} onClick
 * @returns
 */
export default useClick = (onClick) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref;
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  if (typeof onclick !== "function") {
    return;
  }
  return ref;
};
