import React, { useEffect, useState } from "react";
import "./listing.css";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { ArrowForwardIosOutlined, HomeOutlined } from "@mui/icons-material";
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

  let tempArr = [];
  useEffect(() => {
    data.map((ite) => {
      // tempArr = [];
      if (singal === true) {
        if (ite.cat_name?.toLowerCase() === id.id?.toLowerCase()) {
          ite.items?.map((ite2) => {
            ite2.products?.map((ite3) => {
              tempArr.push(ite3);
            });
          });
        }
      } else {
        data.map((ite) => {
          ite.items?.map((ite2) => {
            if (
              ite2.cat_name.toLowerCase() ===
              id.id.replace(/-/g, " ").toLocaleLowerCase()
            ) {
              ite2.products.map((it3) => {
                tempArr.push(it3);
                // console.log(it3);
              });
            }
          });
        });
      }
    });
    const list = tempArr.filter(
      (item, index) => tempArr.indexOf(item) === index
    );
    // console.log(list);
    setData(list);
  }, [id]);

  tempArr = [];
  const filterByPrice = (min, max) => {
    data?.map((item) => {
      if (singal === true) {
        // // console.log("start");
        // if (item.cat_name?.toLowerCase() === id.id?.toLowerCase()) {
        //   item.items?.map((ite2) => {
        //     ite2.products?.map((ite3) => {
        //       let price = parseInt(ite3.price.toString().replace(/,/g, ""));
        //       if (min <= price && max >= price) {
        //         ite2.products.map((it3) => {
        //           // tempArr.push(it3);
        //           console.log(ite3.price);
        //         });
        //       } else {
        //         // console.log("Nothing");
        //       }
        //     });
        //   });
        // }
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
              }
            });
          });
        }
      }
    });
    const list = tempArr.filter(
      (item, index) => tempArr.indexOf(item) === index
    );
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
                  to={`/cat/${sessionStorage
                    .getItem("cat")
                    .toLocaleLowerCase()}`}
                >
                  {sessionStorage.getItem("cat")}
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
              <div className="col-md-3 sideBarWreper">
                {data !== 0 && (
                  <Sidebar
                    data={data}
                    currentData={Data}
                    filterByPrice={filterByPrice}
                  />
                )}
              </div>
              <div className="col-md-9 rightContent HomeProduct pt-0">
                <div className="ListingDataHeader">
                  <h4 className="homeproduct">
                    We found <span>{Data?.length}</span> items for you!
                  </h4>
                </div>
                <div className="productRow justify-content-center">
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
