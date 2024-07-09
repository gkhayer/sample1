import { Link } from "react-router-dom";

const heading =
  "mb-4 text-3xl font-bold dark:text-white md:text-5xl lg:text-6xl";

const packages = [
  {
    price: "$20",
    packTitle: "Starter Pack",
    desc: "This Service is suitable for small business looking to kick start their digital journey",
    features: {
      feature1: "Responsive Web Designing",
      feature2: "Basic Branding Services",
      feature3: "Color and Font selection",
    },
    bg: "bg-yellow-400",
    textColor: "text-blue-600",
  },
  {
    price: "$20",
    packTitle: "Business Boost Pack",
    desc: "This Service is suitable for small business looking to kick start their digital journey",
    features: {
      feature1: "Responsive Web Designing",
      feature2: "Basic Branding Services",
      feature3: "Color and Font selection",
    },
    bg: "bg-pink-300",
    textColor: "text-blue-600",
  },
  {
    price: "$20",
    packTitle: "Corporate Excellence",
    desc: "This Service is suitable for small business looking to kick start their digital journey",
    features: {
      feature1: "Responsive Web Designing",
      feature2: "Basic Branding Services",
      feature3: "Color and Font selection",
    },
    bg: "bg-green-950",
    textColor: "text-blue-600",
  },
  {
    price: "$20",
    packTitle: "Enterprice Pro",
    desc: "This Service is suitable for small business looking to kick start their digital journey",
    features: {
      feature1: "Responsive Web Designing",
      feature2: "Basic Branding Services",
      feature3: "Color and Font selection",
    },
    bg: "bg-violet-600",
    textColor: "text-blue-600",
  },
];

const GetStarted = () => {
  return (
    <div>
      <h6 className="b text-5xl">Pricing</h6>
      <p>
        Dive into the possiblities with our creative offerings. These
        meticulously crafted service packages go beyond traditional pricing
        plans, offering a spectrum of innovation solutions to elevate you
        digital presence.
      </p>

      <div className="border-2 p-1 m-1 inline-block">
        <button className="m-1">Monthly</button>
        <button className="m-1">Yearly</button>
      </div>

      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
          {packages.map((pack) => (
            <div className={`border-2 p-12 m-1  ${pack.bg}`}>
              <h2 className={heading}>
                {pack.price} <span className="text-xl">/ Month</span>
              </h2>
              <span>
                <hr className="h-px mx-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              </span>

              <h3 className="font-bold text-xl p-5">{pack.packTitle}</h3>
              <p className="text-left">{pack.desc}</p>
              <div className="text-left">
                <h1>Features</h1>
                <ul className="list-disc">
                  {Object.values(pack.features).map((val) => (
                    <li>{val}</li>
                  ))}
                </ul>
              </div>
              <div className="relative m-5">
                <button
                  className={`border-solid border-2 border-gray-300 ${pack.bg} p-2 m-1 relative bottom-0 cursor-pointer`}
                >
                  <Link to="help/contact">Get Started</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
