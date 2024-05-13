import React, { useState } from "react";
import "./catslider.css";
import Slider from "react-slick";

const CatSlider = () => {
  const [CategoryItems, setcategoryItems] = useState([
    {
      name: "Custard apple",
      bgColor: "#fff3eb",
      items: "1 items",
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png",
    },
    {
      name: "Cake & Milk",
      bgColor: "#ecffec",
      items: "2 items",
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-8.png",
    },
    {
      name: "Headphone",
      bgColor: "#feefea",
      items: "3 items",
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-15.png",
    },
    {
      name: "Vegetables",
      bgColor: "#fffceb",
      items: "4 items",
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png",
    },
    {
      name: "Coffe & Tea",
      bgColor: "#f2fce4",
      items: "5 items",
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png",
    },
    {
      name: "Strawberry",
      bgColor: "#fffecb",
      items: "6 items",
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png",
    },
    {
      name: "Peach",
      bgColor: "#feefea",
      items: "7 items",
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png",
    },
    {
      name: "Black plum",
      bgColor: "#feefea",
      items: "8 items",
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png",
    },
    {
      name: "Snack",
      bgColor: "#ecffec",
      items: "9 items",
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png",
    },
    {
      name: "Oganic Kiwi",
      bgColor: "#fff3eb",
      items: "10 items",
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png",
    },
    {
      name: "Red Apple",
      bgColor: "#feefea",
      items: "11 items",
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png",
    },
    {
      name: "Cake & Milk",
      bgColor: "#fff3ff",
      items: "12 items",
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png",
    },
  ]);

  var settings = {
    dots: false,
    infinite: true,
    // speed: 300,
    slidesToShow: 10,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    fade: false,
    arrows: true,
  };
  return (
    <div className="catSliderSection">
      <div className="container-fluid">
        <h2 className="hd ">Featured Categories</h2>
        <Slider {...settings} className="cat_slider_Main w-100">
          {CategoryItems !== 0 &&
            CategoryItems.map((ite, index) => (
              <div className="item" key={index}>
                <div
                  className="info"
                  style={{ background: ite.bgColor, borderColor: ite.bgColor }}
                >
                  <img src={ite.imglink} />
                  <h5>{ite.name}</h5>
                  <span>{ite.items}</span>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default CatSlider;
