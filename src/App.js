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

const MyContext = createContext();
function App() {
  const [productData, setProductData] = useState();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // getData("http://localhost:3000/jayeshProducts");
    getCart("http://localhost:5000/cartItems");
    getData("http://localhost:5000/jayeshProducts");
  }, []);

  const getData = async (url) => {
    try {
      await axios.get(url).then((res) => {
        setProductData(res.data);
        console.log("Done");
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

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    emptyCart,
  };

  return productData !== undefined ? (
    <BrowserRouter>
      <MyContext.Provider value={value}>
        <Header data={productData} />
        <Routes>
          <Route exact={true} path="/" element={<Home data={productData} />} />
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
            path="/cart"
            element={<Cart cartData={cartItems} />}
          />
          <Route exact={true} path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </MyContext.Provider>
    </BrowserRouter>
  ) : (
    <>Loading.........</>
  );
}

export default App;
export { MyContext };
