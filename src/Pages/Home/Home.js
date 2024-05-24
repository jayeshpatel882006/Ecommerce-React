import React, { useEffect, useState } from "react";
import SliderCompo from "./Slider/Slider";
import CatSlider from "../../Components/CatSlider/CatSlider";
import Banner from "../../Components/Banner/Banner";
import { Link } from "react-router-dom";
import "./home.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Slider from "react-slick";
import TopProducts from "../../Components/TopProducts/TopProducts";
import { ArrowForward, StarPurple500TwoTone } from "@mui/icons-material";
import { Button } from "@mui/material";
import Banner4 from "../../assets/images/banner-4.png";

const Home = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
    // speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    fade: false,
    arrows: true,
  };
  const [ProductData, setProductData] = useState(data);
  const [popularHeading, setPopularHeading] = useState([]);
  const [activetab, setActiveTab] = useState();
  const [avtiveTabIndex, setActiveTabIndex] = useState(0);
  const [activeTabData, setActiveTabData] = useState();
  const [dailyBestSaleProduct, setDailyBestSaleProduct] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPopularHeading([]);
    let list = [];
    ProductCard !== undefined &&
      ProductData?.map((ite, index) => {
        ite.items?.map((item, index) => {
          list.push(item.cat_name);
          setPopularHeading((popularHeading) => [
            ...popularHeading,
            item.cat_name,
          ]);
        });
      });
    setActiveTab(list[0]);
    list = [];
  }, []);

  useEffect(() => {
    let arr = [];
    ProductData &&
      ProductData.map((ite) => {
        if (ite.cat_name === "Electronics") {
          ite.items.map((items) => {
            // console.log(items);
            items.products.map((items2, index) => {
              arr.push({
                ...items2,
                parentCatName: ite.cat_name,
                subCatName: items.cat_name,
              });
            });
            setDailyBestSaleProduct(arr);
          });
        }
      });
  }, []);

  useEffect(() => {
    let arr = [];

    ProductData?.length !== 0 &&
      ProductData?.map((item) => {
        item.items?.map((item_) => {
          if (item_.cat_name === activetab) {
            item_.products.length !== 0 &&
              item_.products.map((product) => {
                arr.push({
                  ...product,
                  parentCatName: item.cat_name,
                  subCatName: item_.cat_name,
                });
              });

            setActiveTabData(arr);
          }
        });
      });
  }, [activeTabData, activetab, avtiveTabIndex]);

  const [popularProducts, setpopularProducts] = useState([
    {
      imgLink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",
      bedgeBackground: "#f74b81",
      bedgetxt: "Hot",
      catName: "Snack",
      title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      rating: 2.5,
      brandName: "NestFood",
      newPrice: "20.10",
      oldPrice: "23.5",
    },
    {
      imgLink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg",
      bedgeBackground: "#f74b81",
      bedgetxt: "Hot",
      catName: "Hodo Foods",
      title: "All Natural Italian-Style Chicken Meatballs ",
      rating: 3.5,
      brandName: "Stouffer",
      newPrice: "52.85",
      oldPrice: "55.8",
    },
    {
      imgLink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg",
      bedgeBackground: "#f74b81",
      bedgetxt: "Hot",
      catName: "Snack",
      title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      rating: 4,
      brandName: "StarKist",
      newPrice: "48.85",
      oldPrice: "52.8",
    },
    {
      imgLink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg",
      bedgeBackground: "#3bb77e",
      bedgetxt: "New",
      catName: "Snack",
      title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      rating: 4.0,
      brandName: "StarKist",
      newPrice: "48.85",
      oldPrice: "52.8",
    },
    {
      imgLink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
      bedgeBackground: "#3bb77e",
      bedgetxt: "",
      catName: "Vegetables",
      title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
      rating: 4.0,
      brandName: "NestFood",
      newPrice: "17.85",
      oldPrice: "19.8",
    },
    {
      imgLink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg",
      bedgeBackground: "#f59758",
      bedgetxt: "-14%",
      catName: "Pet Foods",
      title: "Blue Diamond Almonds Lightly Salted Vegetables",
      rating: 4.0,
      brandName: "NestFood",
      newPrice: "23.85",
      oldPrice: "25.8",
    },
    {
      imgLink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg",
      bedgeBackground: "#3bb77e",
      bedgetxt: "",
      catName: "Meats",
      title: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
      rating: 4.0,
      brandName: "NestFood",
      newPrice: "32.85",
      oldPrice: "33.8",
    },
    {
      imgLink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg",
      bedgeBackground: "#67bcee",
      bedgetxt: "Sale",
      catName: "Snack",
      title: "Encore Seafoods Stuffed Alaskan Salmon",
      rating: 4.0,
      brandName: "NestFood",
      newPrice: "35.85",
      oldPrice: "37.8",
    },
    {
      imgLink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg",
      bedgeBackground: "#f74b81",
      bedgetxt: "Hot",
      catName: "Coffes",
      title: "Gorton’s Beer Battered Fish Fillets with soft paper",
      rating: 4.0,
      brandName: "Old El Paso",
      newPrice: "23.85",
      oldPrice: "25.8",
    },
    {
      imgLink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-1.jpg",
      bedgeBackground: "#3bb77e",
      bedgetxt: "",
      catName: "Cream",
      title: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
      rating: 2.0,
      brandName: "Tyson",
      newPrice: "22.85",
      oldPrice: "24.8",
    },
  ]);
  const [topSelling, setTopSelling] = useState([
    [
      {
        imgSrc:
          "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-1.jpg",
        titleName: "Nestle Original Coffee-Mate Coffee Creamer",
        rating: 2,
        price: "$32.85",
        oldprice: "$33.8",
      },
      {
        imgSrc:
          "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-2.jpg",
        titleName: "Nestle Original Coffee-Mate Coffee Creamer",
        rating: 3,
        price: "$32.85",
        oldprice: "$33.8",
      },
      {
        imgSrc:
          "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg",
        titleName: "Nestle Original Coffee-Mate Coffee Creamer",
        rating: 5,
        price: "$32.85",
        oldprice: "$33.8",
      },
    ],
    [
      {
        imgSrc:
          "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg",
        titleName: "Organic Cage-Free Grade A Large Brown Eggs",
        rating: 3,
        price: "$32.85",
        oldprice: "$33.8",
      },
      {
        imgSrc:
          "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg",
        titleName: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rating: 1,
        price: "$32.85",
        oldprice: "$33.8",
      },
      {
        imgSrc:
          "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-6.jpg",
        titleName: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
        rating: 2,
        price: "$32.85",
        oldprice: "$33.8",
      },
    ],
    [
      {
        imgSrc:
          "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-7.jpg",
        titleName: "Pepperidge Farm Farmhouse Hearty White Bread",
        rating: 5,
        price: "$32.85",
        oldprice: "$33.8",
      },
      {
        imgSrc:
          "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-8.jpg",
        titleName: "Organic Frozen Triple Berry Blend",
        rating: 4,
        price: "$32.85",
        oldprice: "$33.8",
      },
      {
        imgSrc:
          "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-9.jpg",
        titleName: "Oroweat Country Buttermilk Bread",
        rating: 2,
        price: "$32.85",
        oldprice: "$33",
      },
    ],
    [
      {
        imgSrc:
          "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-10.jpg",
        titleName: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        rating: 3,
        price: "$32.85",
        oldprice: "$33.8",
      },
      {
        imgSrc:
          "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-11.jpg",
        titleName: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        rating: 4,
        price: "$32.85",
        oldprice: "$33.8",
      },
      {
        imgSrc:
          "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-12.jpg",
        titleName: "All Natural Italian-Style Chicken Meatballs",
        rating: 2,
        price: "$32.85",
        oldprice: "$33.8",
      },
    ],
  ]);

  return (
    <div>
      <SliderCompo />
      <CatSlider data={data} />
      <Banner />
      <section className="HomeProduct">
        <div className="container-fluid ">
          <div className="d-flex align-items-center">
            <h4 className="hd mb-0 cursor-text">Popular Products</h4>
            <ul className="list list-inline FilterTab transition">
              {popularHeading &&
                popularHeading.map((ite, index) => (
                  <li
                    className={`list-inline-item transition  ${
                      index == avtiveTabIndex ? "Active" : ""
                    }`}
                    onClick={() => {
                      setActiveTabIndex(index);
                      setActiveTab(ite);
                    }}
                    key={index}
                  >
                    <p className="cursor transition"> {ite}</p>
                  </li>
                ))}
            </ul>
          </div>
          <div className="productRow justify-content-center">
            {activeTabData &&
              activeTabData.map((ite, index) => (
                <div className="item" key={index}>
                  <ProductCard Data={ite} catName={activetab} />
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="DailyProduct">
        <div className="container-fluid  ">
          <div className="d-flex align-items-center">
            <h4 className="hd mb-0 cursor-text">Daily Best Sells</h4>
          </div>
          <div className="row">
            <div className="col-sm-3 demoImgContainer">
              <img
                src={Banner4}
                loading="lazy"
                className="demoImg w-100 h-100 transition"
              />
              <h4>Bring nature into your home</h4>
              <Button className="transition">
                Shop Now <ArrowForward className="transition" />
              </Button>
            </div>
            <div className="col-sm-9 demoProductContainer">
              <Slider {...settings} className="dailyProductSlider w-100">
                {dailyBestSaleProduct?.map((ite, index) => (
                  <div className="item" key={index}>
                    <ProductCard Data={ite} key={index} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="topProduct">
        <div className="container-fluid  w-100">
          <div className="row">
            <div className="col">
              <TopProducts title="Top Selling" Data={topSelling[0]} />
            </div>
            <div className="col">
              <TopProducts title="Trending Products" Data={topSelling[1]} />
            </div>
            <div className="col">
              <TopProducts title="Recently added" Data={topSelling[2]} />
            </div>
            <div className="col">
              <TopProducts title="Top Rated " Data={topSelling[3]} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
