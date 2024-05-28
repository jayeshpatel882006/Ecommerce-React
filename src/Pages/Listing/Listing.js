import React, { useContext, useEffect, useState } from "react";
import "./listing.css";
import "./ResponsiveListing.css"
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { FilterAltOffOutlined, FilterAltOutlined, HomeOutlined } from "@mui/icons-material";
import { MyContext } from "../../App";
import { Button } from "@mui/material";
const Listing = ({ data, singal }) => {
  // const [popularProducts, setpopularProducts] = useState([
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",
  //     bedgeBackground: "#f74b81",
  //     bedgetxt: "Hot",
  //     catName: "Snack",
  //     title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  //     rating: 2.5,
  //     brandName: "NestFood",
  //     newPrice: "20.10",
  //     oldPrice: "23.5",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg",
  //     bedgeBackground: "#f74b81",
  //     bedgetxt: "Hot",
  //     catName: "Hodo Foods",
  //     title: "All Natural Italian-Style Chicken Meatballs ",
  //     rating: 3.5,
  //     brandName: "Stouffer",
  //     newPrice: "52.85",
  //     oldPrice: "55.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg",
  //     bedgeBackground: "#f74b81",
  //     bedgetxt: "Hot",
  //     catName: "Snack",
  //     title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
  //     rating: 4,
  //     brandName: "StarKist",
  //     newPrice: "48.85",
  //     oldPrice: "52.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg",
  //     bedgeBackground: "#3bb77e",
  //     bedgetxt: "New",
  //     catName: "Snack",
  //     title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
  //     rating: 4.0,
  //     brandName: "StarKist",
  //     newPrice: "48.85",
  //     oldPrice: "52.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
  //     bedgeBackground: "#3bb77e",
  //     bedgetxt: "",
  //     catName: "Vegetables",
  //     title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
  //     rating: 4.0,
  //     brandName: "NestFood",
  //     newPrice: "17.85",
  //     oldPrice: "19.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg",
  //     bedgeBackground: "#f59758",
  //     bedgetxt: "-14%",
  //     catName: "Pet Foods",
  //     title: "Blue Diamond Almonds Lightly Salted Vegetables",
  //     rating: 4.0,
  //     brandName: "NestFood",
  //     newPrice: "23.85",
  //     oldPrice: "25.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg",
  //     bedgeBackground: "#3bb77e",
  //     bedgetxt: "",
  //     catName: "Meats",
  //     title: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
  //     rating: 4.0,
  //     brandName: "NestFood",
  //     newPrice: "32.85",
  //     oldPrice: "33.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg",
  //     bedgeBackground: "#67bcee",
  //     bedgetxt: "Sale",
  //     catName: "Snack",
  //     title: "Encore Seafoods Stuffed Alaskan Salmon",
  //     rating: 4.0,
  //     brandName: "NestFood",
  //     newPrice: "35.85",
  //     oldPrice: "37.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",
  //     bedgeBackground: "#f74b81",
  //     bedgetxt: "Hot",
  //     catName: "Snack",
  //     title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  //     rating: 2.5,
  //     brandName: "NestFood",
  //     newPrice: "20.10",
  //     oldPrice: "23.5",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",
  //     bedgeBackground: "#f74b81",
  //     bedgetxt: "Hot",
  //     catName: "Snack",
  //     title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  //     rating: 2.5,
  //     brandName: "NestFood",
  //     newPrice: "20.10",
  //     oldPrice: "23.5",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg",
  //     bedgeBackground: "#f74b81",
  //     bedgetxt: "Hot",
  //     catName: "Hodo Foods",
  //     title: "All Natural Italian-Style Chicken Meatballs ",
  //     rating: 3.5,
  //     brandName: "Stouffer",
  //     newPrice: "52.85",
  //     oldPrice: "55.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg",
  //     bedgeBackground: "#f74b81",
  //     bedgetxt: "Hot",
  //     catName: "Snack",
  //     title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
  //     rating: 4,
  //     brandName: "StarKist",
  //     newPrice: "48.85",
  //     oldPrice: "52.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg",
  //     bedgeBackground: "#3bb77e",
  //     bedgetxt: "New",
  //     catName: "Snack",
  //     title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
  //     rating: 4.0,
  //     brandName: "StarKist",
  //     newPrice: "48.85",
  //     oldPrice: "52.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
  //     bedgeBackground: "#3bb77e",
  //     bedgetxt: "",
  //     catName: "Vegetables",
  //     title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
  //     rating: 4.0,
  //     brandName: "NestFood",
  //     newPrice: "17.85",
  //     oldPrice: "19.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg",
  //     bedgeBackground: "#f59758",
  //     bedgetxt: "-14%",
  //     catName: "Pet Foods",
  //     title: "Blue Diamond Almonds Lightly Salted Vegetables",
  //     rating: 4.0,
  //     brandName: "NestFood",
  //     newPrice: "23.85",
  //     oldPrice: "25.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg",
  //     bedgeBackground: "#3bb77e",
  //     bedgetxt: "",
  //     catName: "Meats",
  //     title: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
  //     rating: 4.0,
  //     brandName: "NestFood",
  //     newPrice: "32.85",
  //     oldPrice: "33.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg",
  //     bedgeBackground: "#67bcee",
  //     bedgetxt: "Sale",
  //     catName: "Snack",
  //     title: "Encore Seafoods Stuffed Alaskan Salmon",
  //     rating: 4.0,
  //     brandName: "NestFood",
  //     newPrice: "35.85",
  //     oldPrice: "37.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg",
  //     bedgeBackground: "#f74b81",
  //     bedgetxt: "Hot",
  //     catName: "Coffes",
  //     title: "Gorton’s Beer Battered Fish Fillets with soft paper",
  //     rating: 4.0,
  //     brandName: "Old El Paso",
  //     newPrice: "23.85",
  //     oldPrice: "25.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-1.jpg",
  //     bedgeBackground: "#3bb77e",
  //     bedgetxt: "",
  //     catName: "Cream",
  //     title: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
  //     rating: 2.0,
  //     brandName: "Tyson",
  //     newPrice: "22.85",
  //     oldPrice: "24.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",
  //     bedgeBackground: "#f74b81",
  //     bedgetxt: "Hot",
  //     catName: "Snack",
  //     title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  //     rating: 2.5,
  //     brandName: "NestFood",
  //     newPrice: "20.10",
  //     oldPrice: "23.5",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg",
  //     bedgeBackground: "#f74b81",
  //     bedgetxt: "Hot",
  //     catName: "Hodo Foods",
  //     title: "All Natural Italian-Style Chicken Meatballs ",
  //     rating: 3.5,
  //     brandName: "Stouffer",
  //     newPrice: "52.85",
  //     oldPrice: "55.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg",
  //     bedgeBackground: "#f74b81",
  //     bedgetxt: "Hot",
  //     catName: "Snack",
  //     title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
  //     rating: 4,
  //     brandName: "StarKist",
  //     newPrice: "48.85",
  //     oldPrice: "52.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg",
  //     bedgeBackground: "#3bb77e",
  //     bedgetxt: "New",
  //     catName: "Snack",
  //     title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
  //     rating: 4.0,
  //     brandName: "StarKist",
  //     newPrice: "48.85",
  //     oldPrice: "52.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
  //     bedgeBackground: "#3bb77e",
  //     bedgetxt: "",
  //     catName: "Vegetables",
  //     title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
  //     rating: 4.0,
  //     brandName: "NestFood",
  //     newPrice: "17.85",
  //     oldPrice: "19.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg",
  //     bedgeBackground: "#f59758",
  //     bedgetxt: "-14%",
  //     catName: "Pet Foods",
  //     title: "Blue Diamond Almonds Lightly Salted Vegetables",
  //     rating: 4.0,
  //     brandName: "NestFood",
  //     newPrice: "23.85",
  //     oldPrice: "25.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg",
  //     bedgeBackground: "#3bb77e",
  //     bedgetxt: "",
  //     catName: "Meats",
  //     title: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
  //     rating: 4.0,
  //     brandName: "NestFood",
  //     newPrice: "32.85",
  //     oldPrice: "33.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg",
  //     bedgeBackground: "#67bcee",
  //     bedgetxt: "Sale",
  //     catName: "Snack",
  //     title: "Encore Seafoods Stuffed Alaskan Salmon",
  //     rating: 4.0,
  //     brandName: "NestFood",
  //     newPrice: "35.85",
  //     oldPrice: "37.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg",
  //     bedgeBackground: "#f74b81",
  //     bedgetxt: "Hot",
  //     catName: "Coffes",
  //     title: "Gorton’s Beer Battered Fish Fillets with soft paper",
  //     rating: 4.0,
  //     brandName: "Old El Paso",
  //     newPrice: "23.85",
  //     oldPrice: "25.8",
  //   },

  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
  //     bedgeBackground: "#3bb77e",
  //     bedgetxt: "",
  //     catName: "Vegetables",
  //     title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
  //     rating: 4.0,
  //     brandName: "NestFood",
  //     newPrice: "17.85",
  //     oldPrice: "19.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg",
  //     bedgeBackground: "#f59758",
  //     bedgetxt: "-14%",
  //     catName: "Pet Foods",
  //     title: "Blue Diamond Almonds Lightly Salted Vegetables",
  //     rating: 4.0,
  //     brandName: "NestFood",
  //     newPrice: "23.85",
  //     oldPrice: "25.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg",
  //     bedgeBackground: "#3bb77e",
  //     bedgetxt: "",
  //     catName: "Meats",
  //     title: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
  //     rating: 4.0,
  //     brandName: "NestFood",
  //     newPrice: "32.85",
  //     oldPrice: "33.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg",
  //     bedgeBackground: "#67bcee",
  //     bedgetxt: "Sale",
  //     catName: "Snack",
  //     title: "Encore Seafoods Stuffed Alaskan Salmon",
  //     rating: 4.0,
  //     brandName: "NestFood",
  //     newPrice: "35.85",
  //     oldPrice: "37.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg",
  //     bedgeBackground: "#f74b81",
  //     bedgetxt: "Hot",
  //     catName: "Coffes",
  //     title: "Gorton’s Beer Battered Fish Fillets with soft paper",
  //     rating: 4.0,
  //     brandName: "Old El Paso",
  //     newPrice: "23.85",
  //     oldPrice: "25.8",
  //   },
  //   {
  //     imgLink:
  //       "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-1.jpg",
  //     bedgeBackground: "#3bb77e",
  //     bedgetxt: "",
  //     catName: "Cream",
  //     title: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
  //     rating: 2.0,
  //     brandName: "Tyson",
  //     newPrice: "22.85",
  //     oldPrice: "24.8",
  //   },
  // ]);

  const [Data, setData] = useState();
  const id = useParams();
const context = useContext(MyContext)
  const [brandfilter, setBrandFilter] = useState();
  const [ratingsArr, setRatingArr] = useState();
  const [seeFilterTab , setSeeFilterTab] = useState(context.windowWidth > 922 ? true :false)

  let tempArr = [];
  useEffect(() => {
    window.scrollTo(0, 0);
    if (singal === true) {
      data?.map((ite) => {
        if (ite.cat_name?.toLowerCase() === id.id?.toLowerCase()) {
          ite.items?.map((ite2) => {
            ite2.products?.map((ite3) => {
              tempArr.push({
                ...ite3,
                parentCatName: ite.cat_name,
                subCatName: ite2.cat_name,
              });
            });
          });
        }
      });
    } else {
      data.map((ite) => {
        ite.items?.map((ite2) => {
          if (
            ite2.cat_name.toLowerCase() ===
            id.id.replace(/-/g, " ").toLowerCase()
          ) {
            ite2.products.map((it3) => {
              tempArr.push({
                ...it3,
                parentCatName: ite.cat_name,
                subCatName: ite2.cat_name,
              });
            });
          }
        });
      });
    }

    const list = tempArr.filter(
      (item, index) => tempArr.indexOf(item) === index
    );
    // console.log(list);
    checkFilters(list);
    setData(list);
    window.scrollTo(0,0)
  }, [id]);

  tempArr = [];
  let brand = [];
  let rating = [];
  const checkFilters = (dataa) => {
    dataa !== undefined &&
      dataa.map((item) => {
        brand.push(item.brand);
        rating.push(parseFloat(item.rating));
      });
    const list = brand.filter((item, index) => brand.indexOf(item) === index);
    setBrandFilter(list);

    const ratArr = rating.filter((ite, index) => rating.indexOf(ite) === index);
    setRatingArr(ratArr);
  };

  const filterByBrand = (keyword) => {
    tempArr = [];
    data?.map((items) => {
      if (singal === true) {
        items.items?.map((ite2) => {
          ite2.products?.map((produc) => {
            if (produc.brand?.toLowerCase() === keyword.toLowerCase()) {
              tempArr.push({
                ...produc,
                parentCatName: items.cat_name,
                subCatName: ite2.cat_name,
              });
              // console.log("Parent:", items.cat_name, "Child:", ite2.cat_name);
            }
          });
        });
      } else {
        items.items?.map((ite2) => {
          if (
            ite2.cat_name.split(" ").join("-").toLowerCase() ===
            id.id.split(" ").join("-").toLowerCase()
          ) {
            ite2.products?.map((produc) => {
              if (produc.brand?.toLowerCase() === keyword.toLowerCase()) {
                tempArr.push({
                  ...produc,
                  parentCatName: items.cat_name,
                  subCatName: ite2.cat_name,
                });
                console.log("Parent:", items.cat_name, "Child:", ite2.cat_name);
              }
            });
          }
        });
      }
    });

    const list = tempArr.filter(
      (item, index) => tempArr.indexOf(item) === index
    );
    tempArr = [];
    setData(list);
    window.scrollTo(0, 0);
  };
  const filterByRating = (keyword) => {
    tempArr = [];
    data?.map((items) => {
      if (singal === true) {
        if (items.cat_name?.toLowerCase() === id.id?.toLowerCase()) {
          items.items?.map((ite2) => {
            ite2.products?.map((produc) => {
              if (produc.rating === keyword) {
                tempArr.push({
                  ...produc,
                  parentCatName: items.cat_name,
                  subCatName: ite2.cat_name,
                });
                // console.log("Parent:", items.cat_name, "Child:", ite2.cat_name);
              }
            });
          });
        }
      } else {
        items.items?.map((ite2) => {
          if (
            ite2.cat_name.split(" ").join("-").toLowerCase() ===
            id.id.split(" ").join("-").toLowerCase()
          ) {
            ite2.products.map((produc) => {
              if (produc.rating === keyword) {
                tempArr.push({
                  ...produc,
                  parentCatName: items.cat_name,
                  subCatName: ite2.cat_name,
                });
                // console.log("Parent:", items.cat_name, "Child:", ite2.cat_name);
              }
            });
          }
        });
      }
    });

    const list = tempArr.filter(
      (item, index) => tempArr.indexOf(item) === index
    );
    setData(list);
    // console.log(list);
    tempArr = [];
    window.scrollTo(0, 0);
  };

  const filterByPrice = (min, max) => {
    data?.map((item) => {
      if (singal === true) {
        if (item.cat_name?.toLowerCase() === id.id?.toLowerCase()) {
          item.items?.map((ite2) => {
            ite2.products?.map((product) => {
              let price = parseInt(product.price.toString().replace(/,/g, ""));
              if (min <= price && max >= price) {
                tempArr.push({
                  ...product,
                  parentCatName: item.cat_name,
                  subCatName: ite2.cat_name,
                });
                // console.log("Parent:", item.cat_name, "Child:", ite2.cat_name);
              }
            });
          });
        }
      } else {
        item.items?.map((ite2) => {
          if (
            ite2.cat_name.split(" ").join("-").toLowerCase() ===
            id.id.split(" ").join("-").toLowerCase()
          ) {
            ite2.products?.map((products) => {
              let price = parseInt(products.price.toString().replace(/,/g, ""));
              if (min <= price && max >= price) {
                tempArr.push({
                  ...products,
                  parentCatName: item.cat_name,
                  subCatName: ite2.cat_name,
                });
                // console.log("Parent:", item.cat_name, "Child:", ite2.cat_name);
              }
            });
          }
        });
      }
    });
    const list = tempArr.filter(
      (item, index) => tempArr.indexOf(item) === index
    );
    // console.log(list);
    tempArr = [];
    setData(list);
  };

  return (
    <>
      <section className="listingPage">
        <div className="container-fluid">
          <div className="breadCrumb">
            <h1>{id.id.replace(/-/g, " ")}</h1>
            <ul className="list list-inline">
              <li className="list-inline-item">
                <Link to={"/"}>
                  <HomeOutlined style={{ paddingBottom: "5px" }} />
                  Home
                </Link>
              </li>

              <li className="list-inline-item">
                <Link
                  to={`/cat/${sessionStorage.getItem("cat")?.toLowerCase()}`}
                >
                  {sessionStorage.getItem("cat").charAt(0).toUpperCase() + sessionStorage.getItem("cat").slice(1)}
                </Link>
              </li>

              {singal === false && (
                <>
                  <li className="list-inline-item text-capitalize font-bold">
                    <h4>{id.id.replace(/-/g, " ")}</h4>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="Listingdata">
            <div className="row">
            {  seeFilterTab &&
              <div className="col-md-3 sideBarWreper">
                <div  className="overLay" onClick={()=> (setSeeFilterTab(false))}/>
              {data !== 0 && Data !== undefined && (
                <Sidebar
                  data={data}
                  ratingsArr={ratingsArr}
                  brandfilter={brandfilter}
                  currentData={Data}
                  filterByPrice={filterByPrice}
                  filterByBrand={filterByBrand}
                  checkFilters={checkFilters}
                  filterByRating={filterByRating}
                  seeFilterTab={seeFilterTab}
                  setSeeFilterTab={setSeeFilterTab}
                />
              )}
            </div>
            }
            
              <div className="col-md-9 rightContent HomeProduct pt-0">
                <div className="ListingDataHeader">
                  <h4 className="homeproduct">
                    We found <span>{Data?.length}</span> items for you!
                  </h4>
            {context.windowWidth < 922 &&  
<div className="FilterBtn">
                  <Button onClick={()=>setSeeFilterTab(true)}><FilterAltOutlined />Filter</Button>
  </div>
            }
                </div>
                <div className="productRow justify-content-center transition">
                  {Data &&
                    Data.map((ite, index) => (
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
