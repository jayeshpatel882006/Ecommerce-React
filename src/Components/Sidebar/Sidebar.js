import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Link, useParams } from "react-router-dom";
import Slider from "@mui/material/Slider";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FilterAltOutlined } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import Banner11 from "../../assets/images/banner-11.png";

const Sidebar = ({
  data,
  ratingsArr,
  brandfilter,
  filterByPrice,
  filterByBrand,
  filterByRating,
}) => {
  const [value, setValue] = useState([0, 1000]);
  const [count, setCount] = useState();
  const [maxPrice, setmaxPrice] = useState(1000);
  const { id } = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    filterByPrice(newValue[0], newValue[1]);
  };

  useEffect(() => {
    sessionStorage.getItem("cat") === "Electronics"
      ? setValue([0, 50000])
      : sessionStorage.getItem("cat") === "Fashion"
      ? setValue([0, 2000])
      : setValue([0, 1000]);

    sessionStorage.getItem("cat") === "Electronics"
      ? setmaxPrice(100000)
      : sessionStorage.getItem("cat") === "Fashion"
      ? setmaxPrice(2000)
      : setmaxPrice(1000);
  }, [id]);

  //  sessionStorage.getItem("cat") === "Electronics"
  //    ? setValue([0, 50000])
  //    : sessionStorage.getItem("cat") === "Fashion"
  //    ? setValue([0, 2000])
  //    : setValue([0, 1000]);

  //  sessionStorage.getItem("cat") === "Electronics"
  //    ? setmaxPrice(100000)
  //    : sessionStorage.getItem("cat") === "Fashion"
  //    ? setmaxPrice(2000)
  //    : setmaxPrice(1000);

  useEffect(() => {
    filterByPrice(value[0], value[1]);
  }, [value]);

  let temp = 0;
  let LengthArr = [];

  useEffect(() => {
    data?.map((ite) => {
      ite.items.map((ite1) => {
        temp = temp + ite1.products.length;
      });
      LengthArr.push(temp);
      temp = 0;
    });

    const list = LengthArr.filter(
      (item, index) => LengthArr.indexOf(item) === index
    );
    setCount(list);
  }, []);

  const FilterByBrand = (key) => {
    filterByBrand(key);
  };
  const FilterByRating = (key) => {
    filterByRating(parseFloat(key));
  };

  return (
    <>
      <div className="SideBar">
        <div className="Card border-0 shadow">
          <h2>Category</h2>
          <div className="catList">
            {data?.map((ite, index) => (
              <div className="catItem  transition" key={index}>
                <Link
                  className="d-flex align-items-center transition"
                  onClick={() => sessionStorage.setItem("cat", ite.cat_name)}
                  to={`/cat/${ite.cat_name.toLowerCase()}`}
                >
                  <span className="img">
                    <img src={ite.image} width={30} loading="lazy" />
                  </span>
                  <h4 className="mb-0 ms-3 me-3 transition">
                    {ite.cat_name.toUpperCase()}
                  </h4>
                  <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                    {count !== undefined && count[index]}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="Card border-0 shadow">
          <h2>Filters </h2>
          <div className="Filters mt-3">
            <h5>By Price</h5>

            <Slider
              min={0}
              max={maxPrice}
              step={1}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              color="success"
            />

            <div className="d-flex pt-2 pb-2 priceRange">
              <span>
                From: <strong className="text-success">Rs {value[0]}</strong>
              </span>
              <span className="ms-auto">
                To:
                <strong className="text-success">Rs {value[1]}</strong>
              </span>
            </div>
          </div>
          <div className="Filters mt-3">
            <h5>By Brand</h5>
            <ul>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
              >
                {brandfilter?.map((item, index) => (
                  <li key={index}>
                    {/* <Checkbox color="success" {...label} />
                    {item} */}

                    <FormControlLabel
                      value={item}
                      control={<Radio onChange={() => FilterByBrand(item)} />}
                      label={item}
                    />
                  </li>
                ))}
              </RadioGroup>
            </ul>
          </div>

          <div className="Filters mt-2">
            <h5>Bt Rating</h5>
            <ul>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
              >
                {ratingsArr?.map((item, index) => (
                  <li key={index}>
                    <FormControlLabel
                      value={item}
                      control={<Radio onChange={() => FilterByRating(item)} />}
                      label={item}
                    />
                  </li>
                ))}
              </RadioGroup>
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
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
          <img src={Banner11} className="w-100" loading="lazy" />
          <h5 className="transition">
            Save 17% on <strong className="text-g">Oganic</strong> Juice
          </h5>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
