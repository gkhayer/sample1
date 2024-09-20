import { useEffect, useState } from "react";
import "../style/Carousal.css";
import React from "react";

interface CarouselProps {
  reactChildren: React.ReactNode;
  autoPlay: boolean;
  interval: number;
  itemCount: number
}

const Carousal: React.FC<CarouselProps> = ({
  reactChildren,
  autoPlay = false,
  itemCount
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [autoPlay]);

  const nextSlide = () => {
    if (autoPlay) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
    } else {
      if (currentIndex < itemCount - 3) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const prevSlide = () => {
    if (autoPlay) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + itemCount) % itemCount
      );
    } else {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-images-wrapper">
        <div
          className="carousel-images"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >

          {
            reactChildren
          }
          {/* {reactChildren.map((child, index) => (
            <div className="carousel-item" key={index}>
              {child}
            </div>
          ))} */}
          {/* {children.slice(0, 8).map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Slide ${index}`} />
              <p className="textDesc">Some title</p>
            </div>
          ))} */}
        </div>
      </div>
      <div>
        <button
          className="carousel-control prev"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          ◀
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default Carousal;
