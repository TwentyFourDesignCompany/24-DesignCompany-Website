import React from "react";
import "./SingleCarousel.css";
import Image from "../../../../assets/images/caro4.png";
import styled from "styled-components";

const SingleCarousel = (props) => {
  return (
    <MainImage className="mr-10">
      <img src={props.image} alt="24 Design" className="w-full h-full block" />
    </MainImage>
  );
};

export default SingleCarousel;
const MainImage = styled.div`
  height: 100px;
  width: 200px;
`;
