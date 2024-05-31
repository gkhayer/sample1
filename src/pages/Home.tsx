import "../style/Home.css";

const coverImage = "../../public/cover photo.jpg";

const Home = () => {
  return (
    <>
      <div className="box">
        <img className = "coverPhoto" src={coverImage} alt="image description" />
      </div>

      <p className="py-6 m-6">
        At Shonq Tech, we specialize in crafting dynamic websites tailored to
        your needs. From sleek portfolios to robust e-commerce platforms, our
        team ensures your online presence reflects your brand's essence. Beyond
        design, we're adept at managing your marketing strategies and optimizing
        your site for search engines, guaranteeing maximum visibility in the
        digital realm. Trust us to not only build your website but also elevate
        your online success with comprehensive SEO solutions.
      </p>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </>
  );
};

Home.propTypes = {};

export default Home;
