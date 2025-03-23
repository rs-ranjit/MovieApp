import { useEffect, useState } from "react";

const useFetch = (fetchFunction, query = "", autoFetch = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Pass query to fetchFunction (fetchMovies)
      const result = await fetchFunction(query);

      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setLoading(false);
    setError(null);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [query]); // Re-run the effect if the query changes

  return { data, loading, error, refetch: fetchData, reset };
};

export default useFetch;
