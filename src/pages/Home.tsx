import "../style/Home.css";
import GetStarted from "./HomeComponents/getStarted";

const coverImage = "../../public/yelow tech bg.png";
const boxes = "flex items-center justify-center";

const cells = [
  {
    title: "Branding",
    color: "border-teal-300",
    bg: "bg-teal-300", //'#ff738f'
  },
  {
    title: "Digital Marketing",
    color: "border-pink-400", //'#ff738f'
    bg: "bg-pink-400", //'#ff738f'
  },
  {
    title: "Business Development",
    color: "border-purple-400", //'#a549ff'
    bg: "bg-purple-400", //'#a549ff'
  },
  {
    title: "Social Media Marketing",
    color: "border-orange-400", //'#efa958'
    bg: "bg-orange-400", //'#efa958'
  },
  {
    title: "SEO Services",
    color: "border-indigo-400", //'#6522b8'
    bg: "bg-indigo-400", //'#6522b8'
  },
  {
    title: "Marketing Plan",
    color: "border-yellow-400", //'#ffd93b'
    bg: "bg-yellow-400", //'#ffd93b'
  },
];

const Home = () => {
  return (
    <>
      <div className="box grid grid-cols-2">
        <img
          className="coverPhoto rounded-l-lg"
          src={coverImage}
          alt="image description"
        />
        <div className="grid grid-cols-2 b rounded-r-lg">
          {cells.map((cell, key) => (
            <div
              key={key}
              className={`border-4 ${cell.color} ${boxes} ${cell.bg}`}
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

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <GetStarted />
    </>
  );
};
export default Home;