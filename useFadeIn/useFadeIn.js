import { useEffect, useRef } from "react";

/**
 *
 * @param {number} duration
 * @param {number} delay
 * @returns
 */
export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const {
        current: { style },
      } = element;
      style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      style.opacity = 1;
    }
  }, []);
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
};
