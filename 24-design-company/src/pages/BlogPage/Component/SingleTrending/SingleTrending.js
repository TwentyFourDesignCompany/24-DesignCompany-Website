import React from "react";
import "./SingleTreding.css";
import Image from "../../../../assets/images/blog1.png";
import Divider from "../../../../component/Divider/Divider";

const SingleTrending = (props) => {
  return (
    <div className="w-full md:grid md:grid-cols-2 md:h-52 h-80 trending-cont mb-10 flex flex-col">
      <img src={Image} alt="24 Design Company" className="block md:h-52 h-48" />
      <div className="pb-5 md:pt-5 pt-5 md:px-8 px-5">
        <p className="trending-date font-light sm:text-base lg:text-lg text-xs mb-3 ">
          November 23, 2020
        </p>
        <p className="font-semibold text-primary-main sm:text-base lg:text-lg text-xs mb-4 md:mb-8 ">
          Take your small business online:
          <span className="font-normal text-primary-main sm:text-base lg:text-lg text-xs">
            &nbsp;A step-by-step guide.
          </span>
        </p>
        <Divider />
        <div className=" flex flex-row">
          <p className="trending-date sm:text-sm text-xs  mt-6 border-r pr-1 border-secodary-main mr-1">
            by WolzBauer
          </p>
          <p className="trending-date mt-6  sm:text-sm text-xs ">
            Apr 26, 2020{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleTrending;
