/**
 *
 * @returns
 */
export default usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  const enablePreve = () => window.addEventListener("beforeunload", listener);
  const disablePreve = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePreve, disablePreve };
};
