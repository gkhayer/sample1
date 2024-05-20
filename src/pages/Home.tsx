import "../style/Home.css";

const img =
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

const Home = () => {
  return (
    <>
      <div className="box">
        <div className="coverdrop">
          <img className="h-45 w-10 rounded-full " src={img} alt="" />
        </div>
      </div>

      <p className="p-6 m-6">
        At Shonq Tech, we specialize in crafting dynamic websites tailored to
        your needs. From sleek portfolios to robust e-commerce platforms, our
        team ensures your online presence reflects your brand's essence. Beyond
        design, we're adept at managing your marketing strategies and optimizing
        your site for search engines, guaranteeing maximum visibility in the
        digital realm. Trust us to not only build your website but also elevate
        your online success with comprehensive SEO solutions.
      </p>
    </>
  );
};

Home.propTypes = {};

export default Home;
