import React, { useState } from "react";
import "./listing.css";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { ArrowForwardIosOutlined, HomeOutlined } from "@mui/icons-material";
const Listing = () => {
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
  return (
    <>
      <section className="listingPage">
        <div className="container-fluid">
          <div className="breadCrumb">
            <h1>Snack</h1>
            <ul className="list list-inline">
              <li className="list-inline-item">
                <Link>
                  <HomeOutlined style={{ paddingBottom: "5px" }} />
                  Home
                </Link>
              </li>

              <li className="list-inline-item">
                <Link>Shop</Link>
              </li>
              <li className="list-inline-item">
                <Link>Snack</Link>
              </li>
            </ul>
          </div>

          <div className="Listingdata">
            <div className="row">
              <div className="col-md-3 sideBarWreper">
                <Sidebar />
              </div>
              <div className="col-md-9 rightContent HomeProduct pt-0">
                <div className="ListingDataHeader">
                  <h4 className="homeproduct">
                    We found <span>{popularProducts.length}</span> items for
                    you!
                  </h4>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
