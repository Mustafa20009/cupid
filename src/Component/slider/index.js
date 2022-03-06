import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: this.props.slide,
      slidesToScroll: 1,
      arrows: false,
    };
    return <Slider {...settings}>{this.props?.children}</Slider>;
  }
}
