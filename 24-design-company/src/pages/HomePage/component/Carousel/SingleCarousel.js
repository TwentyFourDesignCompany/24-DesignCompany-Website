import React from "react";
import "./SingleCarousel.css";
import Image from "../../../../assets/images/caro4.png";

const SingleCarousel = (props) => {
  return (
    <div className="mx-5">
      <img src={props.image} alt="24 Design" className="block " />
    </div>
  );
};

export default SingleCarousel;
