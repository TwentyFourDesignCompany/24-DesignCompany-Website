import React from "react";
import Button from "../../component/Buttons/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaAngleDoubleRight,
} from "react-icons/fa";
import Bulb from "../../assets/images/bulb.png";
import Hover from "../../assets/images/HoverImg.png";
import Hover1 from "../../assets/images/HoverImg1.png";
import Hands from "../../assets/images/Hands.svg";
import SingleService from "./component/SingleService/SingleService";
import { services, carouselSettings, carouselData } from "../../data";
import Slider from "react-slick";
import SingleCarousel from "./component/Carousel/SingleCarousel";
import { motion } from "framer-motion";

const HomePage = () => {
  const servicesView = services.map((item) => (
    <SingleService {...item} key={item.id} />
  ));
  const carouselView = carouselData.map((item) => (
    <SingleCarousel {...item} key={item.id} />
  ));

  return (
    <motion.div
      className="container main-home-container relative"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="container relative pt-20 pb-5  lg:pl-28 main-wrapper md:pl-12 pl-6">
        <div className="w-full h-full justify-center items-center lg:pt-32 md:pt-24 pt-24 ">
          <h1 className="font-semibold main-text ">
            Bring your tech ideas to life
          </h1>
          <h6 className="sub-main-text1">
            with our outstanding team,&nbsp;
            <span className="sub-main-text2">nothing is impossible</span>
          </h6>
          <h6 className="sub-main-text3">
            Our focus is the agile development of web, cloud, and mobile
            applications – and helping organizations create and sustain digital
            innovation.
          </h6>
          <button className="home-btn sm:mb-5 animate-bounce">
            Get Started
          </button>
          <div className="absolute invisible sm:visible lg:bottom-8 lg:right-10 md:right-0 bottom-3 md:bottom-4 flex">
            {/* SINGLE ICON */}
            <NavLink className="mr-14 single-icon animate-pulse" to="#">
              <FaFacebook className="home-icon" />
            </NavLink>
            {/* SINGLE ICON */}
            <NavLink
              className="mr-14 single-icon animate-pulse"
              to="https://twitter.com/24DesignCompany"
              target="_blank"
            >
              <FaTwitter className="home-icon" />
            </NavLink>
            {/* SINGLE ICON */}
            <NavLink className="mr-14 single-icon animate-pulse" to="#">
              <FaLinkedin className="home-icon" />
            </NavLink>
            {/* SINGLE ICON */}
            <NavLink className="mr-14 single-icon animate-pulse" to="#">
              <FaWhatsapp className="home-icon" />
            </NavLink>
          </div>
        </div>
      </main>

      <section className="container min-w-full pt-16 mt-0 pb-20 bg-primary-main h-2/4 sub-main lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
        <div className="sub-main-cont   flex  ">
          <div className="bulb-img-cont lg:visible invisible">
            <img
              src={Bulb}
              alt="Bulb"
              className="bulb-img block w-full h-full"
            />
          </div>
          <div className="lg:pt-7 sub-main-cont-1">
            <h6 className="sub-main-cont-text font-bold">
              Connecting Business and Technology
            </h6>
            <h6 className="sub-main-cont-text1 mb-10">
             We help you harness the cutting edge of tech to boost operational efficiencies, ensure faster time to value, and revolutionize customer care. Our service offering is built around helping you launch and sustain your digital transformation long-term.
            </h6>

            <Button width={200}>Know more</Button>
          </div>
        </div>
      </section>
      {/* VIEWS */}
      <section className="container min-w-full  grid lg:grid-cols-3 gap-0 ">
        {/* SINGLE IMAGE CONT */}
        <div className="w-full relative single-hover-cont h-96 transition-all duration-500 ease-in-out">
          <img src={Hover} alt="24 Design" className="w-full h-full" />
          <div className="hover-effect transition-all duration-500 ease-in-out absolute right-0 top-0 left-0 bottom-0 px-8 w-full h-full pt-7 bg-secodary-main">
            <div className="mx-auto w-1/2 h-1/2">
              <img src={Hands} alt="24 Design" className="w-full h-full" />
            </div>
            <h6 className="text-center font-bold text-4xl text-primary-main">
              Team Work
            </h6>
            <h6 className="text-center font-light text-lg mt-8">
              Teamwork like no other, be assured of a fast, percise yet accurate
              result.
            </h6>
          </div>
        </div>
        {/* SINGLE IMAGE CONT */}
        <div className="w-full relative single-hover-cont h-96 transition-all duration-500 ease-in-out">
          <img src={Hover} alt="24 Design" className="w-full h-full" />
          <div className="hover-effect transition-all duration-500 ease-in-out absolute right-0 top-0 left-0 bottom-0 px-8 w-full h-full pt-7 bg-primary-light">
            <div className="mx-auto w-1/2 h-1/2">
              <img src={Hands} alt="24 Design" className="w-full h-full" />
            </div>
            <h6 className="text-center font-bold text-4xl text-primary-main">
              Team Work
            </h6>
            <h6 className="text-center font-light text-lg mt-8">
              Teamwork like no other, be assured of a fast, percise yet accurate
              result.
            </h6>
          </div>
        </div>
        {/* SINGLE IMAGE CONT */}
        <div className="w-full relative single-hover-cont h-96 transition-all duration-500 ease-in-out">
          <img src={Hover1} alt="24 Design" className="w-full h-full" />
          <div className="hover-effect transition-all duration-500 ease-in-out absolute right-0 top-0 left-0 bottom-0 px-8 w-full h-full pt-7 bg-secodary-main">
            <div className="mx-auto w-1/2 h-1/2">
              <img src={Hands} alt="24 Design" className="w-full h-full" />
            </div>
            <h6 className="text-center font-bold text-4xl text-primary-main">
              Team Work
            </h6>
            <h6 className="text-center font-light text-lg mt-8">
              Teamwork like no other, be assured of a fast, percise yet accurate
              result.
            </h6>
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section className="container pt-20 pb-5 lg:pb-12 min-w-full lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
        {/* SERVICES HEADER */}
        <div className="w-full flex justify-between align-middle  pb-14">
          <h6 className="font-semibold lg:text-4xl know-text md:text-2xl text-base  text-primary-main">
            Know about our services
          </h6>
          <NavLink to="#">
            <h6 className="uppercase font-semibold see-text  text-secodary-main lg:text-lg text-xs  md:text-xs sm:mt-0 mt-1">
              See all
            </h6>
          </NavLink>
        </div>
        {/* SERVICES */}
        <div className="container min-w-full grid lg:grid-cols-3 lg-gap-3 gap-5 pb-10">
          {/* SINGLE SERVICE */}
          {servicesView}
        </div>
      </section>
      {/* PASSION */}
      <section className="container passion-section min-w-full pt-16 mt-0 pb-5 sm:pb:10 lg:pb-20">
        <div className="passion-sub-section min-w-full lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
          <h6 className="font-bold mb-5 text-primary-main lg:text-7xl md:text-5xl lg:w-5/12 passion-text text-5xl text-left">
            Design is
          </h6>
          <h6 className="font-bold text-primary-main lg:text-7xl md:text-5xl passion-text lg:w-5/12 text-5xl  text-left">
            our passion
          </h6>
          <p className="text-primary-main text-sm lg:text-base  font-light sm:w-1/2 lg:w-2/5 mt-12">
            Let us serve you, using our passion to build that mega-idea of
            yours, we know what you want, with our problem solving abilities.
          </p>
          <p className="text-primary-main text-sm lg:text-base font-light sm:w-3/4 lg:w-1/2 mt-5">
            Check out our Awesome gallery, satisfy your eyes, calm your mind
          </p>

          <button className="passion-btn flex animate-bounce outline-none w-40 h-9  mt-12 border rounded-xl border-primary-main bg-primary-main ">
            Gallery
            <FaAngleDoubleRight className="ml-1 " />
          </button>
        </div>
      </section>
      {/* CLIENTS SECTION */}
      <section className="container clients-view   min-w-full lg:pt-16 pt-8 mt-0 md:pb-16  lg:pb-20 lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
        <h6 className="text-center font-bold sm:text-4xl text-xl lg:text-5xl mb-12 lg:mb-20">
          Our Lovely Clients
        </h6>
        {/* CAROUSEL VIEW */}
        <div className="container min-w-full mx-auto ">
          <Slider {...carouselSettings}>{carouselView}</Slider>
        </div>
      </section>
      {/* PHONE VIEW */}
      <section className="container phone-view min-w-full pt-4 mt-0 pb:10  lg:pb-28 lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12  pr-6">
        <div className=" phone-text-cont xl:mx-auto   xl:pl-48 xl:pt-5 lg:pl-10 lg:pt-44 md:pl-14 pt-24 md:pt-24 pl-10 ">
          <h6 className="font-bold phone-big-text text-primary-main  xl:text-7xl text-left md:mb-3 lg:text-7xl md:text-6xl text-2xl">
            Interested in
          </h6>
          <h6 className="font-bold phone-big-text text-primary-main xl:text-7xl text-left md:mb-5 mb-1 lg:text-7xl md:text-6xl text-2xl">
            building a project
          </h6>
          <p className="font-normal text-primary-light lg:text-2xl mb-1 md:text-lg  phone-small-text">
            Heyyy!!, why not build with us and stay calm
          </p>
          <p className="font-normal text-primary-light lg:text-2xl mb-1 md:text-lg  phone-small-text">
            Interested in building a project
          </p>
          <button className="passion-btn phone-btn flex animate-bounce outline-none md:w-40 w-28 md:h-9 h-6 md:mt-7 mt-5 border rounded-xl border-primary-main bg-primary-main ">
            Reach us
            <FaAngleDoubleRight className="ml-1 " />
          </button>
        </div>
      </section>
      <section className="container phone-padding-view min-w-full md:pb-32 pb-20"></section>
    </motion.div>
  );
};

export default HomePage;
