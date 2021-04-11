import Image from "./assets/images/service1.png";
import Image2 from "./assets/images/service2.png";
import Image3 from "./assets/images/service3.png";
import caro from "./assets/images/bluechip-light-1.png";
import caro2 from "./assets/images/sebas.jpg";
import caro3 from "./assets/images/24careline.400b5d32.png";
import caro4 from "./assets/images/bluechip.gif";
import caro5 from "./assets/images/caro5.png";
import pro1 from "./assets/images//product1.png";
import pro2 from "./assets/images//product2.png";
import pro3 from "./assets/images//product3.png";
import pro4 from "./assets/images//product4.png";
import web1 from "./assets/images/web1.png";
import web2 from "./assets/images/web2.png";
import web3 from "./assets/images/web3.png";
import web4 from "./assets/images/web4.png";
import mobile1 from "./assets/images/mobile1.png";
import mobile2 from "./assets/images/mobile2.png";
import mobile3 from "./assets/images/mobile3.png";
import mobile4 from "./assets/images/mobile4.png";
import mobile5 from "./assets/images/mobile5.png";
import career1 from "./assets/images/career1.png";
import career2 from "./assets/images/career2.png";
import career3 from "./assets/images/career3.png";
import career4 from "./assets/images/career4.png";
import career5 from "./assets/images/career5.png";

export const services = [
  {
    id: 1,
    title: "Product Devlopment",
    details:
      "End-to-End Product Development Services To Help You Stay Competitive in the Market",
    image: Image,
    link: "/project-development",
  },
  {
    id: 2,
    title: " Web Application Development",
    details:
      "Custom web applications designed to meet specific business challenges",
    image: Image2,
    link: "/web-development",
  },
  {
    id: 3,
    title: "Mobile Development",
    details:
      "Robust Mobile Applications For Improved Client And Workforce Engagement",
    image: Image3,
    link: "/mobile-development",
  },
];

export const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export const carouselData = [
  {
    id: 1,
    image: caro,
  },
  {
    id: 2,
    image: caro2,
  },
  {
    id: 3,
    image: caro3,
  },
  {
    id: 4,
    image: caro4,
  },
  {
    id: 5,
    image: caro5,
  },
];

export const productData = [
  {
    id: 1,
    title: "Prototyping",
    details:
      "Through prototypes tested under market conditions, we refine product functionality and identify issues early to minimize developmentrisks andforecast investments. We deliver complete specification lists,static mockups, and designed interfaces, keeping in mind your future scalability.",
    image: pro1,
  },
  {
    id: 2,
    title: "Product development",
    details:
      "As a strategic partner, we can help you identify emerging trends, understandmarket requirements, and create software products that add value to your customers. Our software development team translates these insights intoinnovative products to equip you with competitive advantage.",
    image: pro2,
  },
  {
    id: 3,
    title: "Product support",
    details:
      "Through prototypes tested under market conditions, we refine productfunctionality and identify issues early to minimize development risks andforecast investments. We deliver complete specification lists, static mockups,and designed interfaces, keeping in mind your future scalability.",
    image: pro3,
  },
  {
    id: 4,
    title: "Product testing",
    details:
      "Our Quality Assurance team ensures that your product hits the market with full functionality and performance. Our testing services encompass various approaches such as Validation Testing, Load Testing, System Testing, Functionality, and Crash Testing to ascertain that your product is scalable, reliable, and secure.",
    image: pro4,
  },
];
export const webData = [
  {
    id: 1,
    title: "Latest Technologies",
    details:
      "We empower our clients with adaptive web applications built using PostgreSQL, Python, MongoDB, React, Node.js to simplify complexbusiness workflows.",
    image: web1,
  },
  {
    id: 2,
    title: "Efficient Methodologies",
    details:
      "We strive for efficiency in custom web applications by subjecting them toaccepted design standards and testing. The agile practices followed by usensure that the projects are delivered within the stipulated time and budget.",
    image: web2,
  },
  {
    id: 3,
    title: "Value-Adds",
    details:
      "Customized web applications fosters growth in valuation and intellectualproperty in the long run. Businesses can better streamline their dailyoperations and processes to fulfill key challenges and achieve targeted goals.",
    image: web3,
  },
  {
    id: 4,
    title: "Expertise",
    details:
      "We have carved out a niche in web application development, alongside valuedconsulting and analysis solutions, to serve growing businesses and industryleaders including Sony, Johnson & Johnson, and NEC.",
    image: web4,
  },
];
export const mobileData = [
  {
    id: 1,
    title: "IOS App Development",
    details:
      "Our iOS applications help you take informed decisions and give you the flexibility to perform critical tasks with ease. Our services extend across various domains and skill sets to help you innovate business processes acrossdepartments.",
    image: mobile1,
  },
  {
    id: 2,
    title: "Android App Development",
    details:
      "Our expert team can help deliver customized, secure, and robust nativeAndroid applications including e-commerce, augmented reality and integration applications that help you meet your business objectives.",
    image: mobile2,
  },
  {
    id: 3,
    title: "Hybrid App Development",
    details:
      "Customized web applications fosters growth in valuation and intellectualproperty in the long run. Businesses can better streamline their dailyoperations and processes to fulfill key challenges and achieve targeted goals.",
    image: mobile3,
  },
  {
    id: 4,
    title: "Cross-Platform App Development",
    details:
      "We have carved out a niche in web application development, alongside valuedconsulting and analysis solutions, to serve growing businesses and industryleaders including Sony, Johnson & Johnson, and NEC.",
    image: mobile4,
  },
  {
    id: 5,
    title: "Mobile Strategies",
    details:
      "We blend our mobile strategies with your technology needs to ensure that you delightyour customers and attain business success. The goal is to gain maximum benefit fromthe current mobile technologies.",
    image: mobile5,
  },
];
export const careerData = [
  {
    id: 1,
    title: "Great Co-workers",
    details:
      "Work with some of the best talents in the industry and build strong networks with them.",
    image: career1,
  },
  {
    id: 2,
    title: "Education oppurtunities",
    details:
      "Work with some of the best talents in the industry and build strong networks with them.",
    image: career2,
  },
  {
    id: 3,
    title: "Ideas",
    details:
      "We let ideas grow, everything you comeup with will be takenseriously and the whole team will work on the idea to try it out.",
    image: career3,
  },
  {
    id: 4,
    title: "Easy Location",
    details:
      "We let ideas grow, everything you comeup with will be takenseriously and the whole team will work on the idea to try it out.",
    image: career4,
  },
  {
    id: 5,
    title: "Performance Award",
    details:
      "Get awarded for better performance every 6 month and be recognized for your work.",
    image: career5,
  },
];

export const jobs = [
  { id: 1, title: "Software Devloper", level: "Junior" },
  { id: 2, title: "Product Manager", level: "Senior" },
  { id: 3, title: "UI/UX Designer", level: "Junior" },
  { id: 4, title: "Mobile Dveloper", level: "Junior" },
  { id: 5, title: "Backend-Developer", level: "Senior" },
];
