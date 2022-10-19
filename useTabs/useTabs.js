import { useState } from "react";

/**
 *
 * @param {umber} initialTab
 * @param {array} allTabs
 * @returns
 */
export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    item: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
