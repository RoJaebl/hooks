import { useState } from "react";

/**
 * @param {string} initialValue
 * @return {object} pops
 */
export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    console.log(e.target);
  };
  return { value, onChange };
};
