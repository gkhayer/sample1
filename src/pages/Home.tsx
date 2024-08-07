import "../style/Home.css";
import SelectPackageTypeInfo from "./HomeComponents/SelectPackageTypeInfo";

const coverImage = "../../public/cover photo.jpg"
const boxes = "flex items-center justify-center";

const cells = [
  {
    title: "Branding",
    color: "border-[#809bce]",
    bg: "bg-[#809bce]",
  },
  {
    title: "Digital Marketing",
    color: "border-[#e27396]",
    bg: "bg-[#e27396]",
  },
  {
    title: "Business Development",
    color: "border-[#ffc2d1]",
    bg: "bg-[#ffc2d1]",
  },
  {
    title: "Social Media Marketing",
    color: "border-[#95b8d2]",
    bg: "bg-[#95b8d2]",
  },
  {
    title: "SEO Services",
    color: "border-[#b3d7e7]",
    bg: "bg-[#b3d7e7]",
  },
  {
    title: "Marketing Plan",
    color: "border-[#eac4d5]",
    bg: "bg-[#eac4d5]", 
  },
];

const Home = () => {
  return (
    <>
      <div className="box grid grid-cols-2">
        <img
          className="coverPhoto rounded-l-lg"
          src={coverImage}
          alt="Cover Image"
        />
        <div className="grid grid-cols-2 b rounded-r-lg">
          {cells.map((cell, key) => (
            <div
              key={key}
              className={`${cell.color} ${boxes} ${cell.bg}`}
            >
              {cell.title}
            </div>
          ))}
        </div>
      </div>

      <p className="py-6 m-6 text-lg text-start">
        At Shonq Tech, we specialize in crafting dynamic websites tailored to
        your needs. From sleek portfolios to robust e-commerce platforms, our
        team ensures your online presence reflects your brand's essence. Beyond
        design, we're adept at managing your marketing strategies and optimizing
        your site for search engines, guaranteeing maximum visibility in the
        digital realm. Trust us to not only build your website but also elevate
        your online success with comprehensive SEO solutions.
      </p>

      <hr className="h-px my-[5rem] bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <SelectPackageTypeInfo />
    </>
  );
};
export default Home;