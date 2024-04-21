import React, { useState, useEffect } from 'react';

interface FetchResponse<T> {
  loading: boolean;
  error: boolean | undefined;
  data: T | null;
  execute: () => void;
}

const useFetch = <T>(
  fetchFunction: () => Promise<{ data: T }>,
): FetchResponse<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>();
  const [data, setData] = useState<T | null>(null);

  const useEffectOnce = (callback: () => void) => {
    useEffect(() => {
      callback();
    }, []);
  };

  const execute = async () => {
    setLoading(true);
    setError(false);
    setData(null);

    try {
      const response = await fetchFunction();
      setData(response.data);
      return response;
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(execute);
  return { execute, loading, error, data };
};

export default useFetch;
