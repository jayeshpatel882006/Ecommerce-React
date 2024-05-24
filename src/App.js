import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import Listing from "./Pages/Listing/Listing";
import NotFound from "./Pages/NotFound/NotFound";
import Details from "./Pages/Details/Details";
import axios from "axios";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import Loader from "./assets/images/loading.gif";

const MyContext = createContext();
function App() {
  const [productData, setProductData] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [isLogedIn, setisLogedIn] = useState(true);
  const [isLoding, setIsloading] = useState(false);

  useEffect(() => {
    // getData("http://localhost:3000/jayeshProducts");
    getCart("http://localhost:5000/cartItems");
    getData("http://localhost:5000/jayeshProducts");
  }, []);

  useEffect(() => {
    setisLogedIn(localStorage.getItem("isLogdin") ? true : false);
  }, [localStorage]);

  const getData = async (url) => {
    setIsloading(true);
    try {
      await axios.get(url).then((res) => {
        setProductData(res.data);
        console.log(res.data);
        setTimeout(() => {
          setIsloading(false);
        }, 1500);
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getCart = async (url) => {
    try {
      await axios.get(url).then((res) => {
        setCartItems(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = async (item) => {
    // setIsloading(true);
    let newitem = {
      id: item.id.toString(),
      productName: item.productName,
      price: item.price,
      rating: item.rating,
      quantity: 1,
      catImg: item.catImg,
    };
    cartItems?.map((product) => {
      if (parseInt(product.id) === parseInt(item.id)) {
        console.log("same", item);
      }
    });

    try {
      await axios
        .post("http://localhost:5000/cartItems", newitem)
        .then((res) => {
          if (res !== undefined) {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
          }
          // setIsloading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = async (id) => {
    let newData = cartItems.filter((ite) => ite.id !== id);
    setCartItems(newData);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const handalLogOut = () => {
    localStorage.removeItem("isLogdin");
    setisLogedIn(false);
  };
  const handalSignIn = () => {
    localStorage.setItem("isLogdin", true);
    setisLogedIn(true);
  };

  const value = {
    cartItems,
    isLogedIn,
    setIsloading,
    handalLogOut,
    handalSignIn,
    addToCart,
    removeFromCart,
    emptyCart,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={value}>
        {isLoding === true && (
          <div className="loaderWereper">
            <img src={Loader} loading="lazy" />
          </div>
        )}
        <div className={`${isLoding ? "Loading" : ""}`}>
          <Header data={productData} />
          <Routes>
            <Route
              exact={true}
              path="/"
              element={<Home data={productData} />}
            />
            <Route
              exact={true}
              path="/cat/:id"
              element={<Listing data={productData} singal={true} />}
            />
            <Route
              exact={true}
              path="/cat/:id/:id"
              element={<Listing data={productData} singal={false} />}
            />
            <Route exact={true} path="/about" element={<About />} />
            <Route
              exact={true}
              path="/products/:id"
              element={<Details data={productData} />}
            />

            <Route
              exact={true}
              path={"/cart"}
              element={<Cart cartData={cartItems} />}
            />

            <Route exact={true} path="/auth/login" element={<Login />} />
            <Route exact={true} path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
