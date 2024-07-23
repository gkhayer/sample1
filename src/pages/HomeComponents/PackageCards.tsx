import { Link, useLocation } from "react-router-dom";
import { PricesInfo } from "../../types/types";

const heading =
  "mb-4 text-xl font-bold dark:text-white md:text-3xl lg:text-5xl";

const PackageCards = ({
  price,
  packTitle,
  desc,
  features,
  bgColor,
}: PricesInfo) => {
  const location = useLocation();

  return (
    <div className={` flex flex-col justify-between basic-full border-2 p-12 m-1 ${bgColor}`}>
      <div>
        <h2 className={heading}>
          {price}{" "}
          <span className="text-xl">
            / {location.pathname.includes("monthly") ? "Month" : "Yr"}
          </span>
        </h2>
        <span>
          <hr className="h-px mx-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </span>
        <h3 className="font-bold text-xl p-5">{packTitle}</h3>
        <p className="text-left">{desc}</p>
      </div>

      <div className="text-left">
        <h1>Features</h1>
        <ul className="list-disc">
          {Object.values(features).map((val, key) => (
            <li key={key}>{val}</li>
          ))}
        </ul>
      </div>
      <button
        className={`border-solid border-2 border-gray-300 ${bgColor} p-2 m-1 relative bottom-0 cursor-pointer`}
      >
        <Link to="/help/contact">Get Started</Link>
      </button>
    </div>
  );
};

export default PackageCards;
