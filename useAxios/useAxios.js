import React, { useState, useEffect } from "react";
import defaultAxios from "axios";

/**
 *
 * @param {object} options
 * @param {function} axiosInstance
 * @returns
 */
export default useAxios = (options, axiosInstance = defaultAxios) => {
  const initState = { loading: true, error: null, data: null };
  const [state, setState] = useState(initState);
  const refetch = () => setState(initState);
  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setState({
          loading: false,
          error: state.error,
          data,
        });
      })
      .catch((error) => {
        setState({ loading: false, error, data: state.data });
      });
  }, [state.loading]);
  if (!options.url) {
    return;
  }
  return { ...state, refetch };
};
