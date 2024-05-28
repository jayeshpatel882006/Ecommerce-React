import React, { useContext, useEffect, useState } from "react";
import "./catslider.css";
import "./ResponsiveCatSlider.css"
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const CatSlider = ({ data }) => {
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
  const [count, setCount] = useState();
  const context  = useContext(MyContext)
  const bgColor = ["#feefea", "#ecffec", "#fff3eb"];
  // let count;
  let temp = 0;
  let LengthArr = [];

  useEffect(() => {
    data?.map((ite) => {
      ite.items?.map((ite1) => {
        temp = temp + ite1.products?.length;
        // console.log(ite1.products.);
      });
      LengthArr.push(temp);
      temp = 0;
    });

    const list = LengthArr.filter(
      (item, index) => LengthArr.indexOf(item) === index
    );
    setCount(list);
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    // speed: 300,
    slidesToShow:   5 , 
    autoplay: context.windowWidth > 922 ? true : false,
    autoplaySpeed: context.windowWidth > 922 ? 3000 : false,
    fade: false,
    arrows: context.windowWidth < 922 ? true : false,
  };
  return (
    <div className="catSliderSection">
      <div className="container-fluid ">
        <h2 className="hd cursor-text">Featured Categories</h2>
        {/* <Slider {...settings} className="cat_slider_Main w-100">
          { CategoryItems!== 0 &&
            CategoryItems?.map((ite, index) => {
              return (
                <div className="item" key={index}>
                  <Link to={`/cat/${ite.name?.toLowerCase()}`}>
                    <div
                      className="info"
                      style={{
                        background: ite.bgColor,
                        borderColor: ite.bgColor,
                      }}
                    >
                      <img src={ite.imglink} loading="lazy" width={100} />
                      <h5 className="transition">{ite.name}</h5>
                      <span>{ite.items !== undefined ? ite.items : ""}</span>
                    </div>
                  </Link>
                </div>
              );
            })}
        </Slider> */}
        
        <Slider {...settings} className="cat_slider_Main w-100">
          {data !== 0 &&
            data?.map((ite, index) => {
              return (
                <div className="item" key={index}>
                  <Link to={`/cat/${ite.cat_name?.toLowerCase()}`} onClick={()=>{
                    sessionStorage.setItem("cat", ite.cat_name);
                  }}>
                    <div
                      className="info"
                      style={{
                        background: bgColor[index],
                        borderColor: bgColor[index],
                      }}
                    >
                      <img src={ite.image} loading="lazy" width={100} />
                      <h5 className="transition">{ite.cat_name.charAt(0).toUpperCase() + ite.cat_name.slice(1)}</h5>
                      <span>{count !== undefined ? count[index] : ""}</span>
                    </div>
                  </Link>
                </div>
              );
            })}
            {data !== 0 &&
              data?.map((ite, index) => {
                return (
                  <div className="item" key={index}>
                    <Link to={`/cat/${ite.cat_name?.toLowerCase()}`} onClick={()=>{
                      sessionStorage.setItem("cat", ite.cat_name);
                    }}>
                      <div
                        className="info"
                        style={{
                          background: bgColor[index],
                          borderColor: bgColor[index],
                        }}
                      >
                        <img src={ite.image} loading="lazy" width={100} />
                        <h5 className="transition">{ite.cat_name.charAt(0).toUpperCase() + ite.cat_name.slice(1)}</h5>
                        <span>{count !== undefined ? count[index] : ""}</span>
                      </div>
                    </Link>
                  </div>
                );
              })}
        </Slider>
      </div>
    </div>
  );
};

export default CatSlider;
