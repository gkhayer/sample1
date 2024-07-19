import PackageCards from "./PackageCards";

const packages = [
  {
    price: "$220",
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
    price: "$550",
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
    price: "$800",
    packTitle: "Corporate Excellence",
    desc: "This Service is suitable for small business looking to kick start their digital journey",
    features: {
      feature1: "Responsive Web Designing",
      feature2: "Basic Branding Services",
      feature3: "Color and Font selection",
    },
    bg: "bg-[#416952]",
    textColor: "text-blue-600",
  },
  {
    price: "$1050",
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

const YearlyPack = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 text-center">
      {packages.map((pack) => (
        <PackageCards
          price={pack.price}
          packTitle={pack.packTitle}
          desc={pack.desc}
          features={pack.features}
          bgColor={pack.bg}
          textColor={pack.textColor}
        />
      ))}
    </div>
  );
};

export default YearlyPack;
