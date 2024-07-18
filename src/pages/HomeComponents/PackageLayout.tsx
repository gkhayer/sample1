import { Link } from "react-router-dom";
import { PricesInfo } from "../../types/types";

const heading =
  "mb-4 text-3xl font-bold dark:text-white md:text-5xl lg:text-6xl";
  
  const PackageLayout = ({
    price,
    packTitle,
    desc,
    features,
    bgColor,
  }: PricesInfo) => {
    return (
      <div className={`border-2 p-12 m-1 ${bgColor}`}>
        <div>
          <h2 className={heading}>
            {price} <span className="text-xl">/ Month</span>
          </h2>
          <span>
            <hr className="h-px mx-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </span>
  
          <h3 className="font-bold text-xl p-5">{packTitle}</h3>
          <p className="text-left">{desc}</p>
          <div className="text-left">
            <h1>Features</h1>
            <ul className="list-disc">
              {Object.values(features).map((val) => (
                <li>{val}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-4">
          <button
            className={`border-solid border-2 border-gray-300 ${bgColor} p-2 m-1 relative bottom-0 cursor-pointer`}
          >
            <Link to="help/contact">Get Started</Link>
          </button>
        </div>
      </div>
    );
  };

  export default PackageLayout