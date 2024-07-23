import "../style/About.css";
import "../../tailwind.config";

const subheading =
  "text-2xl font-normal text-gray-500 lg:text-2xl text-[#30bd73] text-left";

const heading = `mb-4 text-xl font-bold text-[theme('colors.blue.500')] dark:text-white md:text-4xl lg:text-4xl`;

const About = () => {
  return (
    <div className="aboutUs">
      <div>
        <h6 className=" text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Welcome to Shonq Tech!
        </h6>
        <p>
          At Shonq Tech, we're passionate about helping small businesses thrive
          in the digital world. Our mission is to empower businesses by creating
          stunning websites and providing comprehensive digital solutions that
          drive growth and success. Whether you're just starting out or looking
          to enhance your online presence, we're here to guide you every step of
          the way.
        </p>
        <hr className="mt-[4rem] bg-gray-200 " />
      </div>
      <div>
        <p className={heading}>Our Services</p>
        <p className={subheading}>Website Development</p>
        <p className="description">
          We specialize in creating beautiful, functional, and user-friendly
          websites tailored to your business needs. From sleek and simple
          designs to complex e-commerce platforms, we ensure your online
          presence stands out.
        </p>
        <p className={subheading}>Search Engine Optimization (SEO)</p>
        <p>
          Our SEO experts will optimize your website to improve its visibility
          on search engines, helping potential customers find you more easily.
          We use the latest techniques to ensure your site ranks high and
          attracts the right audience.
        </p>
        <p className={subheading}>Digital Marketing</p>
        <p>
          Effective marketing is key to business growth. Our digital marketing
          services include social media management, content creation, email
          marketing, and pay-per-click advertising. We craft strategies that
          resonate with your target audience and drive engagement.
        </p>
        <p className={subheading}>E-commerce Solutions</p>
        <p>
          Ready to sell online? We create robust e-commerce platforms that offer
          a seamless shopping experience. From product listings to secure
          payment gateways, we handle everything to get your online store up and
          running.
        </p>
        <p className={subheading}>Comprehensive Online Presence</p>
        <p>
          Building an online presence goes beyond just having a website. We
          offer a full suite of services to establish and grow your brand
          online. This includes branding, graphic design, and ongoing support to
          ensure your digital footprint continues to expand.
        </p>
        <hr className="mt-[4rem] bg-gray-200 " />
      </div>
      <div>
        <p className={heading}>Our Commitment</p>
        <p>
          At Shonq Tech, we believe in a personalized approach. We take the time
          to understand your business goals and create customized solutions that
          deliver real results. Our team of experienced professionals is
          dedicated to providing exceptional service and support, ensuring your
          business not only meets but exceeds its online potential.
        </p>
        <hr className="mt-[4rem] bg-gray-200 " />
      </div>

      <div>
        <p className={heading}>Why Choose Us?</p>
        <p>
          <b>Expertise:</b>
          Our team has years of experience in web development, SEO, and digital
          marketing.
        </p>
        <p>
          Tailored Solutions: We offer personalized services to meet the unique
          needs of your business.
        </p>
        <p>
          Results-Driven: Our focus is on delivering measurable results that
          contribute to your business growth.
        </p>
        <p>
          Support: We provide ongoing support to help you navigate the digital
          landscape and achieve long-term success.
        </p>
        <hr className="mt-[4rem] bg-gray-200 " />
      </div>

      <div>
        <p className={heading}>Let's Get Started</p>
        <p>
          Ready to take your business to the next level? Contact us today to
          learn how Shonq Tech can help you establish a powerful online presence
          and grow your business.
        </p>
        <div>
          <h2 className={heading}>Contact Us</h2>
          <p>Email: info@shonq.tech</p>
          <p>Phone: (408) 663-7453</p>
        </div>
        {/* <p>Follow us on Facebook, Twitter, and LinkedIn.</p> */}
      </div>
    </div>
  );
};

export default About;
