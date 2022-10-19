/**
 *
 * @param {string} message
 * @param {function} callback
 * @param {function} rejection
 * @returns
 */
export const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function" || typeof rejection !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};
