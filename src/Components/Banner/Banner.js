import React, { useState } from "react";
import "./banner.css";
import banner1 from "../../assets/images/banner-1.png";
import banner2 from "../../assets/images/banner-2.png";
import banner3 from "../../assets/images/banner-3.png";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Banner = () => {
  const [BannerData, setBannerData] = useState([
    {
      imgLink: banner1,
      text: "Everyday Fresh &  Clean with Our Products",
      btnName: " Shop Now",
    },
    {
      imgLink: banner2,
      text: "Make your Breakfast  Healthy and Easy",
      btnName: " Shop Now",
    },
    {
      imgLink: banner3,
      text: "The best Organic  Products Online",
      btnName: " Shop Now",
    },
  ]);
  return (
    <div className="bannersection">
      <div className="container-fluid ">
        <div className="row">
          {BannerData &&
            BannerData.map((ite, index) => (
              <div className="col" key={index}>
                <div className="box position-relative" key={index}>
                  <img src={ite.imgLink} className="w-100 transition " />
                  <h3 className="transition">{ite.text}</h3>
                  <Button className="transition">
                    {ite.btnName} <ArrowForwardIcon className="transition" />
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
