import React, { useEffect, useRef, useState } from "react";

/**
 *
 * @param {function} callback
 * @returns
 */
export default useFullscreen = (callback) => {
  const element = useRef();
  const callFunc = (isFull) => {
    if (typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    const { current } = element;
    if (current.requestFullscreen) {
      current.requestFullscreen();
    } else if (current.mozRequestFullScreen) {
      current.mozRequestFullScreen();
    } else if (current.webkitRequestFullscreen) {
      current.webkitRequestFullscreen();
    } else if (current.msRequestFullscreen) {
      current.msRequestFullscreen();
    }
    callFunc(true);
  };
  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    callFunc(false);
  };
  return { element, triggerFull, exitFull };
};
