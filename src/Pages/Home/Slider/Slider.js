import React from "react";
import Slider from "react-slick";
import "./slider.css";
import img1 from "../../../assets/images/slider-1.png";
import img2 from "../../../assets/images/slider-2.png";
import { Button } from "@mui/material";
import { SendOutlined } from "@mui/icons-material";

const SliderCompo = () => {
  var settings = {
    dots: true,
    infinite: true,
    // speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: true,
  };
  return (
    <section className="homeSlider">
      <div className="container-fluid position-relative">
        <Slider {...settings} className="slider_Main">
          <div className=" bg-g">
            <img src={img1} alt="..." className="w-100" />
            <div className="info">
              <h2>
                Don’t miss amazing
                <br />
                grocery deals
              </h2>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
          <div className=" bg-g">
            <img src={img2} alt="..." className="w-100" />
            <div className="info">
              <h2>
                Fresh Vegetables
                <br />
                Big discount
              </h2>
              <p>Save up to 50% off on your first order</p>
            </div>
          </div>
        </Slider>
        <div className="newsLetterBanner">
          <input type="text" placeholder="Your emaill address" />
          <SendOutlined className="newsLetterIcon" />
          <Button className="newsLetterButton">Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default SliderCompo;
