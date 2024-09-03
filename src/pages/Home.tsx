import "../style/Home.css";
import SelectPackageTypeInfo from "./HomeComponents/SelectPackageTypeInfo";
import PublicPromotion from "./publicPromotion/publicPromotion";

const boxes = "flex items-center justify-center";

const cells = [
  {
    title: "Branding",
    color: "border-[#809bce]",
    bg: "bg-[#809bce]",
    radius: "rounded-tl-2xl",
  },
  {
    title: "Digital Marketing",
    color: "border-[#e27396]",
    bg: "bg-[#e27396]",
    radius: "rounded-tr-2xl",
  },
  {
    title: "Business Development",
    color: "border-[#ffc2d1]",
    bg: "bg-[#ffc2d1]",
    radius: "rounded-none",
  },
  {
    title: "Social Media Marketing",
    color: "border-[#95b8d2]",
    bg: "bg-[#95b8d2]",
    radius: "rounded-none",
  },
  {
    title: "SEO Services",
    color: "border-[#b3d7e7]",
    bg: "bg-[#b3d7e7]",
    radius: "rounded-bl-2xl",
  },
  {
    title: "Marketing Plan",
    color: "border-[#eac4d5]",
    bg: "bg-[#eac4d5]",
    radius: "rounded-br-2xl",
  },
];

const Home = () => {
  return (
    <>
      <section className="box grid grid-cols-2 h-1/4 md:h-screen/2 lg:h-[65vh]">
        <div className="coverFirstHalf borderRadius businessCard">
          <p className="p-20">
            Let's create your digital business card and make your first
            impression unforgettable!
          </p>
          <p>🌸</p>
        </div>
        <div className="grid grid-cols-2 b borderRadius businessCard">
          {cells.map((cell, key) => (
            <div
              key={key}
              className={`${cell.color} ${boxes} ${cell.bg} ${cell.radius}`}
            >
              {cell.title}
            </div>
          ))}
        </div>
      </section>

      <section className="home-content">
        <p className="py-6 m-6 text-lg">
          At Shonq Tech, we specialize in crafting dynamic websites tailored to
          your needs. From sleek portfolios to robust e-commerce platforms, our
          team ensures your online presence reflects your brand's essence.
          Beyond design, we're adept at managing your marketing strategies and
          optimizing your site for search engines, guaranteeing maximum
          visibility in the digital realm. Trust us to not only build your
          website but also elevate your online success with comprehensive SEO
          solutions.
        </p>
        <hr className="h-px my-[5rem] border-0 dark:bg-gray-700" />

        <SelectPackageTypeInfo />
        <hr className="h-px my-[5rem] border-0 dark:bg-gray-700" />

        <PublicPromotion />
      </section>
    </>
  );
};
export default Home;
