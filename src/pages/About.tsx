import '../style/About.css';

const subheading = "text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"

const heading = "mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"

const About = () => {
  return (
    <div className="aboutUs">
      <p>Welcome to Shonq Tech!</p>
      <p>
        At Shonq Tech, we're passionate about helping small businesses thrive in
        the digital world. Our mission is to empower businesses by creating
        stunning websites and providing comprehensive digital solutions that
        drive growth and success. Whether you're just starting out or looking to
        enhance your online presence, we're here to guide you every step of the
        way.
      </p>
      <h2 className={heading}>Our Services</h2>
      <h3 className={subheading}>Website Development</h3>
      <p>
        We specialize in creating beautiful, functional, and user-friendly
        websites tailored to your business needs. From sleek and simple designs
        to complex e-commerce platforms, we ensure your online presence stands
        out.
      </p>
      <h3 className={subheading}>Search Engine Optimization (SEO)</h3>
      <p>
        Our SEO experts will optimize your website to improve its visibility on
        search engines, helping potential customers find you more easily. We use
        the latest techniques to ensure your site ranks high and attracts the
        right audience.
      </p>
      <h3 className={subheading}>Digital Marketing</h3>
      <p>
        Effective marketing is key to business growth. Our digital marketing
        services include social media management, content creation, email
        marketing, and pay-per-click advertising. We craft strategies that
        resonate with your target audience and drive engagement.
      </p>
      <h3 className={subheading}>E-commerce Solutions</h3>
      <p>
        Ready to sell online? We create robust e-commerce platforms that offer a
        seamless shopping experience. From product listings to secure payment
        gateways, we handle everything to get your online store up and running.
      </p>
      <h3 className={subheading}>Comprehensive Online Presence</h3>
      <p>
        Building an online presence goes beyond just having a website. We offer
        a full suite of services to establish and grow your brand online. This
        includes branding, graphic design, and ongoing support to ensure your
        digital footprint continues to expand.
      </p>
      <h2 className={heading}>Our Commitment</h2>
      <p>
        At Shonq Tech, we believe in a personalized approach. We take the time
        to understand your business goals and create customized solutions that
        deliver real results. Our team of experienced professionals is dedicated
        to providing exceptional service and support, ensuring your business not
        only meets but exceeds its online potential.
      </p>
      <h2 className={heading}>Why Choose Us?</h2>
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
      <h2 className={heading}>Let's Get Started</h2>
      <p>
        Ready to take your business to the next level? Contact us today to learn
        how Shonq Tech can help you establish a powerful online presence and
        grow your business.
      </p>
      <div>
        <h2 className={heading}>Contact Us</h2>
        <p>Email: info@shonq.tech</p>
        <p>Phone: (408) 663-7453</p>


        {/* <p>Follow us on Facebook, Twitter, and LinkedIn.</p> */}
      </div>
    </div>
  );
};

export default About;
