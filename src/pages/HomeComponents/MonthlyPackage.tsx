import PackageCards from "./PackageCards";

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
    bg: "bg-[#cc856e]",
    textColor: "text-blue-600",
  },
  {
    price: "$50",
    packTitle: "Business Boost",
    desc: "This Service is suitable for small business looking to kick start their digital journey",
    features: {
      feature1: "Responsive Web Designing",
      feature2: "Basic Branding Services",
      feature3: "Color and Font selection",
    },
    bg: "bg-orange-300",
    textColor: "text-blue-600",
  },
  {
    price: "$70",
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
    price: "$90",
    packTitle: "Enterprice Pro",
    desc: "This Service is suitable for small business looking to kick start their digital journey",
    features: {
      feature1: "Responsive Web Designing",
      feature2: "Basic Branding Services",
      feature3: "Color and Font selection",
    },
    bg: "bg-[#c8c82d]",
    textColor: "text-blue-600",
  },
];

const MonthlyPackage = () => {
  return (
    <div className="grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-center">
      {packages.map((pack, key) => (
        <PackageCards
        price={pack.price}
        packTitle={pack.packTitle}
        desc={pack.desc}
        features={pack.features}
        bgColor={pack.bg}
        textColor={pack.textColor}
        key={key}
        />
      ))}
      </div>
  );
};

export default MonthlyPackage;
