import React from "react";
import Slider from "react-slick";

export default function MultipleItems({ children, slide }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: 1,
    arrows: false,
  };

  return <Slider {...settings}>{children}</Slider>;
}
