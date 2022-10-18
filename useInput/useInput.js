import React, { useState } from "react";

/**
 * @param {string} initialValue
 * @return {object} pops
 */
export default useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    console.log(e.target);
  };
  return { value, onChange };
};
