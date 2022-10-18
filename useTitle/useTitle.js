import React, { useState, useEffect } from "react";

/**
 *
 * @param {string} initialTitle
 * @returns
 */
export default useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
