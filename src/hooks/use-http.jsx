import { useState, useCallback, useEffect } from "react";

const useHttp = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const sendRequest = useCallback(async (url) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      setData(data.results);
      // console.log(data.results[0]);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    sendRequest(url);
  }, [sendRequest, url]);
  return {
    isLoading,
    error,
    data,
  };
};

export default useHttp;
