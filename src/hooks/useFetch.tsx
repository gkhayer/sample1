import { useEffect, useState } from "react";

type StateHookResult<T> = [
  T | null,
  React.Dispatch<React.SetStateAction<T | null>>
];

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isError, setError]: StateHookResult<null> = useState(null);
  const [isPending, setisPending] = useState(false);

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data requested");
        }

        return res.json();
      })
      .then((data) => {
        setData(data);
        setisPending(false);
        setError(null);
      })
      .catch((err) => {
        setisPending(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isPending, isError };
};

export default useFetch;
