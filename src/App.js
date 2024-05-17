import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import Listing from "./Pages/Listing/Listing";
import NotFound from "./Pages/NotFound/NotFound";
import Details from "./Pages/Details/Details";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [productData, setProductData] = useState();

  useEffect(() => {
    getData("http://localhost:3000/productData");
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

  return productData !== undefined ? (
    <BrowserRouter>
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
        <Route exact={true} path="/products/details" element={<Details />} />
        <Route exact={true} path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  ) : (
    <>Loading.........</>
  );
}

export default App;
