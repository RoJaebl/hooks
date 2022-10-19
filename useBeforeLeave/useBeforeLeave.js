import { useEffect } from "react";

/**
 *
 * @param {function} onBefore
 * @returns
 */
export const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", onBefore);
    return () => document.removeEventListener("mouseleave", onBefore);
  }, []);
  if (typeof onBefore !== "function") {
    return;
  }
};
