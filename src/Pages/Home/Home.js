import React, { useState } from "react";
import SliderCompo from "./Slider/Slider";
import CatSlider from "../../Components/CatSlider/CatSlider";
import Banner from "../../Components/Banner/Banner";
import { Link } from "react-router-dom";
import "./home.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Slider from "react-slick";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    // speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    arrows: true,
  };
  const [popularHeading, setPopularHeading] = useState([
    "All",
    "Milks & Dairies",
    "Coffes & Teas",
    "Pet Foods",
    "Meats",
    "Vegetables",
    "Fruits",
  ]);
  const [dailyBestSells, setDailyBestSalls] = useState([
    "Featured",
    "Popular",
    "New added",
  ]);
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
      newPrice: "$48.85",
      oldPrice: "$52.8",
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
      newPrice: "$17.85",
      oldPrice: "$19.8",
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
      newPrice: "$23.85",
      oldPrice: "$25.8",
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
      newPrice: "$32.85",
      oldPrice: "$33.8",
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
      newPrice: "$35.85",
      oldPrice: "$37.8",
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
      newPrice: "$23.85",
      oldPrice: "$25.8",
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
      newPrice: "$22.85",
      oldPrice: "$24.8",
    },
  ]);
  return (
    <div>
      <SliderCompo />
      <CatSlider />
      <Banner />
      <section className="HomeProduct">
        <div className="conatiner-web mt-5">
          <div className="d-flex align-items-center">
            <h4 className="hd mb-0 ">Popular Products</h4>
            <ul className="list list-inline FilterTab transition">
              {popularHeading &&
                popularHeading.map((ite, index) => (
                  <li
                    className={`list-inline-item transition ${
                      index == 0 ? "Active" : ""
                    }`}
                    key={index}
                  >
                    <Link className="cursor transition">{ite}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="productRow justify-content-center">
            {popularProducts &&
              popularProducts.map((ite, index) => (
                <div className="item" key={index}>
                  <ProductCard Data={ite} />
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="DailyProduct">
        <div className="conatiner-web mt-5">
          <div className="d-flex align-items-center">
            <h4 className="hd mb-0 ">Daily Best Sells</h4>
            <ul className="list list-inline FilterTab transition">
              {dailyBestSells &&
                dailyBestSells.map((ite, index) => (
                  <li
                    className={`list-inline-item transition ${
                      index == 0 ? "Active" : ""
                    }`}
                    key={index}
                  >
                    <Link className="cursor transition">{ite}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-4.png"
                className="w-100 demoImg"
              />
            </div>
            <div className="col-sm-9">
              <Slider {...settings} className="dailyProductSlider">
                {popularProducts &&
                  popularProducts.map((ite, index) => (
                    <div className="item">
                      <ProductCard Data={ite} key={index} />
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
