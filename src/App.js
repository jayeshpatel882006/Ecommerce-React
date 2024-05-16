import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import Listing from "./Pages/Listing/Listing";
import NotFound from "./Pages/NotFound/NotFound";
import Details from "./Pages/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/listing" element={<Listing />} />
        <Route exact={true} path="/about" element={<About />} />
        <Route exact={true} path="/products/details" element={<Details />} />
        <Route exact={true} path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
