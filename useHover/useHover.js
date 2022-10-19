import { useEffect } from "react";

/**
 *
 * @param {function} onHover
 * @returns
 */
export const useHover = (onHover) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref;
    if (element.current) {
      element.current.addEventListener("hover", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("hover", onHover);
      }
    };
  }, []);
  if (typeof onHover !== "function") {
    return;
  }
  return ref;
};
