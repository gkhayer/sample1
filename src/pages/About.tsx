import "../style/About.css";
import "../../tailwind.config";
import Card from "../components/Card";

const subheading =
  "text-2xl font-normal text-gray-500 lg:text-2xl text-[var(--primary)] text-left";

const heading = `my-4 text-xl font-bold text-[var(--alpha)] dark:text-white md:text-4xl lg:text-4xl p-10`;

type Subheading = {
  title: string;
  desc: string;
};
type AboutUsType = {
  heading: string;
  subheading: Subheading[];
  description: string;
};

const aboutUsData: AboutUsType[] = [
  {
    heading: "Our Services",
    subheading: [
      {
        title: "Website Development",
        desc: "We specialize in creating beautiful, functional, and user-friendly websites tailored to your business needs. From sleek and simple designs to complex e-commerce platforms, we ensure your online presence stands out.",
      },
      {
        title: "Search Engine Optimization (SEO)",
        desc: "  Our SEO experts will optimize your website to improve its visibility on search engines, helping potential customers find you more easily. We use the latest techniques to ensure your site ranks high and attracts the right audience.",
      },
      {
        title: "Digital Marketing",
        desc: " Effective marketing is key to business growth. Our digital marketing services include social media management, content creation, email marketing, and pay-per-click advertising. We craft strategies that resonate with your target audience and drive engagement.",
      },
      {
        title: "E-commerce Solutions",
        desc: "Ready to sell online? We create robust e-commerce platforms that offer a seamless shopping experience. From product listings to secure payment gateways, we handle everything to get your online store up and running.",
      },
      {
        title: "Comprehensive Online Presence",
        desc: "Building an online presence goes beyond just having a website. We offer a full suite of services to establish and grow your brand online. This includes branding, graphic design, and ongoing support to ensure your digital footprint continues to expand.",
      },
    ],

    description: "",
  },
  {
    heading: "Why Choose Us?",
    subheading: [
      {
        title: "Expertise",
        desc: "Our team has years of experience in web development, SEO, and digital marketing.",
      },
      {
        title: "Tailored Solutions",
        desc: "We offer personalized services to meet the unique needs of your business.",
      },
      {
        title: "Results-Driven",
        desc: "Our focus is on delivering measurable results that contribute to your business growth.",
      },
      {
        title: "Support",
        desc: "We provide ongoing support to help you navigate the digital landscape and achieve long-term success.",
      },
    ],
    description: "",
  },

  {
    heading: "Business Formation Services by Shonq.Tech",
    subheading: [
      {
        title: "Expertise",
        desc: "We have experience in forming all types of business structures, including LLCs, Sole Proprietorships, Partnerships, Corporations, and more.",
      },
      {
        title: "Nationwide Service",
        desc: "No matter where you are in the USA, Shonq.Tech provides business formation services across all 50 states.",
      },
      {
        title: "Personalized Guidance",
        desc: "Our team offers personalized consultations to help you choose the best business structure for your specific needs and goals.",
      },
      {
        title: "Seamless Process",
        desc: "We handle all the paperwork and legal requirements, making the formation process smooth and hassle-free for you.",
      },
      {
        title: "Quick Turnaround",
        desc: "Our efficient process ensures that your business is up and running as quickly as possible.",
      },
      {
        title: "Seamless Process",
        desc: "We handle all the paperwork and legal requirements, making the formation process smooth and hassle-free for you.",
      },
    ],
    description:
      "At Shonq.Tech, we specialize in helping entrepreneurs and businesses establish their presence in the USA by offering comprehensive business formation services for various business structures. Whether you're looking to start an LLC, a Sole Proprietorship, or any other type of business entity, our expert team is here to guide you through every step of the process.Why Choose Shonq.Tech?",
  },
  {
    heading: "Our Commitment",
    description:
      "At Shonq Tech, we believe in a personalized approach. We take the time to understand your business goals and create customized solutions that deliver real results. Our team of experienced professionals is dedicated to providing exceptional service and support, ensuring your business not only meets but exceeds its online potential.",
    subheading: [],
  },
];

const About = () => {
  return (
    <div className="aboutUs">
      <div>
        <h6 className=" text-3xl bg-gradient-to-r from-blue-600 via-[var(--primary)] to-indigo-400 inline-block text-transparent bg-clip-text">
          Welcome to Shonq Tech!
        </h6>
        <p>
          At Shonq Tech, we're passionate about helping small businesses thrive
          in the digital world. Our mission is to empower businesses by creating
          stunning websites and providing comprehensive digital solutions that
          drive growth and success. Whether you're just starting out or looking
          to enhance your online presence, we're here to guide you every step of
          the way. We provide exceptional website consulting services that help
          businesses maximize their online presence and achieve their digital
          goals.
        </p>
      </div>

      <div>
        {aboutUsData.map((section, index) => (
          <div key={index}>
            <h2 className={heading}>{section.heading}</h2>
            <p>{section.description}</p>
            <section className="grid grid-cols-3 gap-4">
              {section.subheading &&
                section.subheading.map((sub, subIndex) => (
                  <Card
                    key={subIndex}
                    title={sub.title}
                    description={sub.desc}
                  />
                ))}
            </section>
            <hr className="mt-[4rem] bg-gray-200 " />
          </div>
        ))}
      </div>

      <div>
        <section className="letsGetStarted">
          <h1 className={heading}>Let's Get Started</h1>
          <p>
            Ready to take your business to the next level? Contact us today to
            learn how Shonq Tech can help you establish a powerful online
            presence and grow your business.
          </p>
        </section>
        <section className="contactUs">
          <h2 className={heading}>Contact Us</h2> <p>Email: info@shonq.tech</p>{" "}
          <p>Phone: (408) 663-7453</p>
        </section>
        {/* <p>Follow us on Facebook, Twitter, and LinkedIn.</p> */}
      </div>
    </div>
  );
};

export default About;

// {aboutUsData &&
//   aboutUsData.map((info) => (
//     <div>
//       <p className={heading}>{info.heading}</p>
//       <p>
//         <h1>{subHeadingTitle && subHeadingTitle}</h1>
//         {/* <p>{subHeadingDesc}</p> */}
//       </p>
//       <p className="description">
//         {info.description && info.description}
//       </p>
//     <hr className="mt-[4rem] bg-gray-200 " />

//     </div>
//   ))}
