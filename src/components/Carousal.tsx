// create input and add new person

import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";

type dataType = {
  url: "string";
};

// add person to carousal
const Carousal = () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const carousalRef = useRef<HTMLInputElement>(null);
  const { data, isPending,  error } = useFetchItem(url);

  if (data == null) {
    return;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    carousalRef &&
      carousalRef.current &&
      carousalRef.current.scrollTo({
        behavior: "smooth",
        left: carousalRef.current.scrollLeft - carousalRef.current.clientWidth,
      });
  };

  const handleNext = () => {
    carousalRef &&
      carousalRef.current &&
      carousalRef.current.scrollTo({
        behavior: "smooth",
        left:
          carousalRef &&
          carousalRef.current &&
          carousalRef.current.scrollLeft + carousalRef.current.clientWidth,
      });
  };

  const newWidth =
    carousalRef && carousalRef.current && carousalRef.current.children.length;

  useEffect(() => {
    const autoplay = setInterval(() => {
      if (newWidth != null) {
        setCurrentIndex((currentIndex + 1) );
      }


    }, 1000);

    return clearInterval(autoplay);
  }, [currentIndex]);

  return (
    <div>
      {/* carousal */}

      <div className="flex items-center">
        {error && <p>Error: {error}</p>}
        {isPending && <p>...Loading</p>}
        {/* <button onClick={handlePrev} className="mx-2" type="button"></button> */}

        <div style={{ display: "flex", overflow: "hidden" }} ref={carousalRef}>
          {data &&
            data.splice(0, 10).map((item: dataType) => (
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                }}
                src={item.url}
              />
            ))}
        </div>
        {/* <button onClick={handleNext} className="mx-2" type="button"></button> */}
      </div>
    </div>
  );
};

export default Carousal;

const useFetchItem = (url: string) => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          return new Error("Fetching unsuccessful");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setError(null);
        setData(data);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isPending, error };
};
