import React, { useState } from "react";

/**
 *
 * @param {umber} initialTab
 * @param {array} allTabs
 * @returns
 */
export default useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    item: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
