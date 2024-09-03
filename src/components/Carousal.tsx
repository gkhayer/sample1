import { useState } from "react";

interface MyComponentProps {
  content: React.ReactNode; // Accepts JSX elements, strings, arrays, etc.
  itemCount: number;
}

const Carousal: React.FC<MyComponentProps> = ({ content, itemCount }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage(currentImage < 1 ? currentImage : currentImage - 1);
  };

  const handleNext = () => {
    setCurrentImage(
      currentImage < itemCount - 1 ? currentImage + 1 : currentImage
    );
  };

  return (
    <div>
      <div className="flex flex-row flex-nowrap justify-between items-center">
        <button onClick={handlePrev} type="button">
          Prev
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            overflow: "hidden",
            position: "relative",
            padding: ".5rem",
          }}
        >
          {content}
        </div>
        <button onClick={handleNext} type="button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousal;
