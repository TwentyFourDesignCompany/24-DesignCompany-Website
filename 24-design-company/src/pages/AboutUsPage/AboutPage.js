import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import Image1 from "../../assets/images/phil1.png";
import Image2 from "../../assets/images/phil2.png";
import Image3 from "../../assets/images/phil3.png";
import Image4 from "../../assets/images/target.png";
import Image5 from "../../assets/images/Layer 2.png";
import SingleTeam from "./SingleTeam/SingleTeam";
import AbosoluteAbout from "../../assets/images/fade-about.png";

const AboutPage = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container main-home-container relative"
    >
      <section className=" container  min-w-full pt-20  lg:pb-10 pb-10  lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
        <div className="w-full h-full about-wrapper relative lg:pt-32 md:pt-24 pt-24">
          <div className="absolute lg:visible invisible">
            <img
              src={AbosoluteAbout}
              alt="24 Design Company"
              className="block"
            />
          </div>
          <div className="about-text-cont w-full h-full lg:mt-60 mt-96">
            <h6 className="font-bold tracking-wide sm:text-6xl text-5xl text-primary-main lg:mb-1">
              About 24
            </h6>

            <h6 className="font-bold sm:text-4xl text-2xl text-primary-main">
              design company
            </h6>
          </div>
        </div>
      </section>
      <section className="container min-w-full lg:pt-20 pt-10 pb-20  lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
        <div className="min-w-full grid lg:grid-cols-2 ">
          <p className="text-primary-main font-medium text-4xl lg:mb-0 mb-5 sm:text-left ">
            Our Company
          </p>
          <div>
            <p className="text-primary-main font-normal sm:text-lg text-base mb-3">
              We are a global IT company providing strategic IT business
              solutions andservices for complex business problems, in multiple
              industry sectors includingretail, healthcare, finance, education,
              and more.
            </p>
            <p className="text-primary-main font-normal sm:text-lg text-base mb-3">
              Our vast technology andindustry expertise enable us to focus on
              cutting-edge Internet technologieswith the aim to develop
              scalable, secure and easy-to-use web applicationsthat work across
              multiple devices.
            </p>
            <p className="text-primary-main font-normal sm:text-lg text-base">
              We believe that the judicious use oftechnology, together with a
              good design can reduce complexity, connectindividuals, and provide
              valuable insights, all of which ultimately help businesses succeed
            </p>
          </div>
        </div>
      </section>
      <section className="container min-w-full lg:pt-10 pt-10 pb-10 bg-primary-main lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
        <div className="min-w-full h-full mx-auto ">
          <p className="font-light text-center success-text  lg:text-3xl italic">
            “The secret of success is to do the common thing uncommonly well.”
          </p>
        </div>
      </section>
      <section className="container philosphy min-w-full lg:pt-20 pt-14 pb-20  lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
        <h6 className="font-bold text-center text-primary-main text-4xl lg:mb-20 mb-16 phil-text">
          Our Philosophy
        </h6>
        <div className="min-w-full grid lg:grid-cols-2  lg:mt-14  mt-5">
          {/* CONT1 */}
          <div>
            {/* SinlgePhil */}
            <div className="mb-20 single-phil">
              <img
                src={Image1}
                alt="24 Design Company"
                className="block mb-5  single-team-img"
              />
              <h6 className="font-semibold text-3xl text-primary-main mb-3">
                User Centered
              </h6>
              <p className="text-sm font-normal text-primary-main">
                A user is anyone who uses, maintains, or is influenced by the
                systems we design.Everything we do comes from understanding
                those users’ past, present, andideal future
              </p>
            </div>
            {/* SinlgePhil */}
            <div className="mb-20 single-phil">
              <img
                src={Image2}
                alt="24 Design Company"
                className="block mb-5  single-team-img"
              />
              <h6 className="font-semibold text-3xl text-primary-main mb-3">
                Data Driven
              </h6>
              <p className="text-sm font-normal text-primary-main">
                Design without data about users and their behavior is just
                guessing. We gatherbaseline data at the start of any design
                process. Then we validate that design with feedback from users,
                not only clients, early and often
              </p>
            </div>
            {/* SinlgePhil */}
            <div className="mb-20 single-phil">
              <img
                src={Image3}
                alt="24 Design Company"
                className="block mb-5  single-team-img"
              />
              <h6 className="font-semibold text-3xl text-primary-main mb-3">
                Collaborative
              </h6>
              <p className="text-sm font-normal text-primary-main">
                Our work is not created in a vacuum. We work in an agile
                mindset, along side project managers and business analysts, to
                ensure that our designs meet business goals and work with
                existing systems. We work with developers toensure that our
                designs are brought to life as envisioned.
              </p>
            </div>
          </div>
          {/* Cont 2 */}
          <div className="lg:mt-32 lg:block hidden">
            <img src={Image4} alt="24 Design Company" className="block" />
          </div>
        </div>
      </section>
      {/* TEAM */}
      <section className="container team min-w-full lg:pt-20 pt-14 pb-20  lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
        <h6 className="font-bold text-primary-main text-4xl  md:mb-20 mb-16">
          Meet our team
        </h6>
        <div className="min-w-full grid lg:grid-cols-4 gap-6 md:grid-cols-3 ">
          <SingleTeam />
          <SingleTeam />
          <SingleTeam />
          <SingleTeam />
        </div>
        <button className="service-btn text-btn animate-bounce outline-none w-40 h-9 block mt-12 mx-auto border rounded-3xl border-primary-main">
          Know more
        </button>
      </section>
      <section className="container digital min-w-full lg:pt-20 pt-14 pb-20  lg:pl-28 md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
        <div className="min-w-full grid lg:grid-cols-2  lg:mt-14  mt-5">
          {/* COnt 1 */}
          <div className="lg:mt-32">
            <h6 className="text-primary-main font-semibold text-3xl mb-3">
              Love building digital products?
            </h6>
            <p className="text-primary-main font-light text-normal text-2xl mb-5">
              Join our team!
            </p>
            <p className="text-primary-main font-light text-normal text-base">
              We’re always on the lookout for talented, ambitious team members.
              Get in touch to discuss opportunities.
            </p>
            <button className="passion-btn flex animate-bounce outline-none w-40 h-9  mt-12 border rounded-3xl border-primary-main bg-primary-main ">
              Apply
            </button>
          </div>
          <div className=" lg:block hidden">
            <img src={Image5} alt="24 Design Company" className="block" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
