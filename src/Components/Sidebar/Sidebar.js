import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { FilterAltOutlined } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import Banner11 from "../../assets/images/banner-11.png";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Sidebar = () => {
  const [value, setValue] = useState([200, 750]);
  const [category, setCategory] = useState([
    {
      imgSrc:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg",
      catname: "Milks & Dairies",
      count: 30,
    },
    {
      imgSrc:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-2.svg",
      catname: "Clothing",
      count: 35,
    },
    {
      imgSrc:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-3.svg",
      catname: "Pet Foods",
      count: 0,
    },
    {
      imgSrc:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-4.svg",
      catname: "Baking material",
      count: 60,
    },
    {
      imgSrc:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-5.svg",
      catname: "Fresh Fruit",
      count: 20,
    },
  ]);
  const [color, setColor] = useState([
    {
      name: "Red",
      count: 56,
    },
    {
      name: " Green",
      count: 78,
    },
    {
      name: "Blue",
      count: 54,
    },
    {
      name: "Yellow",
      count: 2,
    },
  ]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="SideBar">
        <div className="Card border-0 shadow">
          <h2>Category</h2>
          <div className="catList">
            {category &&
              category.map((ite, index) => (
                <div
                  className="catItem d-flex align-items-center transition"
                  key={index}
                >
                  <span className="img">
                    <img src={ite.imgSrc} width={30} />
                  </span>
                  <h4 className="mb-0 ms-3 me-3 transition">{ite.catname}</h4>
                  <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                    {ite.count}
                  </span>
                </div>
              ))}
          </div>
        </div>
        <div className="Card border-0 shadow">
          <h2>Filter by price</h2>
          <Slider
            min={0}
            max={1000}
            step={"1"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            color="success"
          />
          <div className="d-flex pt-2 pb-2 priceRange">
            <span>
              From: <strong className="text-success"> ${value[0]}</strong>
            </span>
            <span className="ms-auto">
              To: <strong className="text-success"> ${value[1]}</strong>
            </span>
          </div>

          <div className="Filters mt-3">
            <h5>Color</h5>
            <ul>
              {color &&
                color.map((ite, index) => (
                  <li key={index}>
                    <Checkbox color="success" {...label} /> {ite.name} (
                    {ite.count})
                  </li>
                ))}
            </ul>
          </div>

          <div className="Filters mt-2">
            <h5>Item Condition</h5>
            <ul>
              <li>
                <Checkbox color="success" {...label} /> New (1506)
              </li>
              <li>
                <Checkbox color="success" {...label} /> Refurbished (27)
              </li>
              <li>
                <Checkbox color="success" {...label} /> Used (45)
              </li>
            </ul>
          </div>
          <div className="FiterBtn">
            <Button className="transition">
              <FilterAltOutlined />
              Filter
            </Button>
          </div>
        </div>

        <div className="Card border-0 shadow">
          <h2>New products</h2>
          <div className="Products">
            <div className="imgContainer">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
                className="w-100"
              />
            </div>
            <div className="InfoContainer">
              <h6>
                <Link className="text-g transition">Chen Cardigan</Link>
              </h6>
              <p>$99.50</p>
              <Rating
                className="rating"
                name="read-only"
                value={3}
                precision={0.5}
                size="small"
                readOnly
              />
            </div>
          </div>
          <div className="Products">
            <div className="imgContainer">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg"
                className="w-100"
              />
            </div>
            <div className="InfoContainer">
              <h6>
                <Link className="text-g transition">Chen Sweater</Link>
              </h6>
              <p>$89.50</p>
              <Rating
                className="rating"
                name="read-only"
                value={4.5}
                precision={0.5}
                size="small"
                readOnly
              />
            </div>
          </div>
          <div className="Products">
            <div className="imgContainer">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg"
                className="w-100"
              />
            </div>
            <div className="InfoContainer">
              <h6>
                <Link className="text-g transition">Colorful Jacket</Link>
              </h6>
              <p>$25</p>
              <Rating
                className="rating"
                name="read-only"
                value={2.5}
                precision={0.5}
                size="small"
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="SideBarImg">
          <img src={Banner11} className="w-100" />
          <h5 className="transition">
            Save 17% on <strong className="text-g">Oganic</strong> Juice
          </h5>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
