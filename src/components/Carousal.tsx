import { useEffect, useState } from "react";
import "../style/Carousal.css";
import React from "react";

interface CarouselProps {
  reactChildren: React.ReactNode;
  autoPlay: boolean;
  interval: number;
  itemCount: number;
}

const Carousal: React.FC<CarouselProps> = ({
  reactChildren,
  autoPlay = false,
  itemCount,
  interval,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === itemCount - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemCount - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (autoPlay) {
      const autoLoop = setInterval(() => {
        nextSlide();
      }, interval);

      return () => clearInterval(autoLoop);
    }
  }, [currentIndex, autoPlay]);

  return (
    <div className="carousel-container">
      <div className="carousal-slide">
        <div className="carousel-wrapper">
          <div
            className="carousel-component"
            style={{
             transform: `translateX(-${currentIndex * (100 / itemCount - 1)}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {reactChildren}
          </div>
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
