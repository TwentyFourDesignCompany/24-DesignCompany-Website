import React from "react";
import "./BlogPage.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import SingleTrending from "./Component/SingleTrending/SingleTrending";
import SingleBlog from "./Component/SingleBlog/SingleBlog";

const BlogPage = () => {
  return (
    <motion.div
      className="container main-home-container relative"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="container relative pt-20 pb-20  lg:pl-28 blog-wrapper md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
        <div className="w-full h-full justify-center items-center lg:pt-32 md:pt-24 pt-24 ">
          <h6 className="font-bold lg:text-9xl sm:text-8xl text-7xl text-right blog-main-text">
            BLOG
          </h6>
        </div>
      </section>
      <section className="container w-full relative pt-20 pb-5 md:pb-20  lg:pl-28 blog-sub-cont md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
        {/* SERVICES HEADER */}
        <div className="w-full flex justify-between align-middle  pb-14">
          <h6 className="font-semibold lg:text-2xl know-text md:text-2xl text-base  text-primary-main">
            Trending now:
          </h6>
          <NavLink to="#">
            <h6 className=" font-medium see-text flex flex-row flex-header text-secodary-main lg:text-sm text-xs  md:text-xs sm:mt-0 mt-1">
              Read all
              <FaAngleDoubleRight className="ml-1 " />
            </h6>
          </NavLink>
        </div>
        <div className="w-full h-full ">
          <SingleTrending />
          <SingleTrending />
          <SingleTrending />
        </div>
      </section>
      <section className="container w-full relative pt-0 pb-5 md:pb-20  lg:pl-28 blog-sub-cont md:pl-12 pl-6 lg:pr-28 md:pr-12 pr-6">
        {/* SERVICES HEADER */}
        <div className="w-full flex justify-between align-middle  pb-14">
          <h6 className="font-semibold lg:text-2xl know-text md:text-2xl text-base  text-primary-main">
            Exclusive Projects
          </h6>
          <NavLink to="#">
            <h6 className=" font-medium see-text flex flex-row flex-header text-secodary-main lg:text-sm text-xs  md:text-xs sm:mt-0 mt-1">
              Read all
              <FaAngleDoubleRight className="ml-1 " />
            </h6>
          </NavLink>
        </div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPage;
