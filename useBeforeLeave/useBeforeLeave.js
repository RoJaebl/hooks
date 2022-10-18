import React, { useEffect } from "react";

/**
 *
 * @param {function} onBefore
 * @returns
 */
export default useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", onBefore);
    return () => document.removeEventListener("mouseleave", onBefore);
  }, []);
  if (typeof onBefore !== "function") {
    return;
  }
};
