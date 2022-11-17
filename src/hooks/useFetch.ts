import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('src/data/items')
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, pageNumber, name, status]);

  return { data, error, isLoading, setPageNumber, setName, setStatus };
}
