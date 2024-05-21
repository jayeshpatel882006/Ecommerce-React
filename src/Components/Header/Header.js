import React, { useContext, useEffect, useRef, useState } from "react";
import "./Header.css";
import axios from "axios";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

import Logo from "../../assets/images/logo.svg";
import IconCompare from "../../assets/images/icon-compare.svg";
import IconWishlist from "../../assets/images/icon-heart.svg";
import IconCart from "../../assets/images/icon-cart.svg";
import IconUser from "../../assets/images/icon-user.svg";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../SelectDrop/Select";
import Button from "@mui/material/Button";
import {
  FavoriteBorderOutlined,
  GridViewOutlined,
  HorizontalRule,
  LocationOnOutlined,
  LogoutOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import Person2OutLinedIcon from "@mui/icons-material/Person2Outlined";
import Nav from "./nav/Nav";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const Header = ({ data }) => {
  const [accountDropDown, setAccountDropDown] = useState(false);
  const [cartItemlength, setCartItemLength] = useState(0);
  const headerRef = useRef();
  const context = useContext(MyContext);
  const [category, setCategory] = useState([
    "Milks and Dairies",
    "Wines & Drinks",
    "Fresh Seafood",
    "Fast food",
    "Vegetables",
    "Bread and Juice",
    "Fresh Fruit",
    "Baking material",
    "Pet Foods & Toy",
    "Clothing & beauty",
  ]);
  let contryList = [];

  useEffect(() => {
    setCartItemLength(context.cartItems?.length);
  }, [context]);

  const getContry = async () => {
    try {
      await axios
        .get("https://countriesnow.space/api/v0.1/countries")
        .then((res) => {
          if (res !== null || res.data.data !== undefined) {
            // setContry(res.data.data.country);
            res.data.data.map((ite, index) => {
              //   console.log(ite.country);
              contryList.push(ite.country);
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContry();
    window.addEventListener("scroll", () => {
      let position = window.scrollY;
      if (position > 100) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
    });
  }, []);

  return (
    <>
      <div className="headerWreper" ref={headerRef}>
        <header className="container-fluid">
          {/* <header> */}

          <div className="row w-100">
            <div className="col-sm-2 d-flex headerLogo align-items-center">
              <Link to={"/"}>
                <img src={Logo} />
              </Link>
            </div>
            <div className="col-sm-5 d-flex align-items-center">
              <div className="headerSerch d-flex align-items-center">
                <Select data={category} placeholder="All Category" />
                <div className="search ">
                  <input type="text" placeholder="Search for items..." />
                  <SearchIcon className="searchIcon cursor" />
                </div>
              </div>
            </div>
            <div className="Phonebutton">
              <GridViewOutlined />
            </div>
            <div className="col-sm-5 d-flex  align-items-center leftHendSide">
              <div className="d-flex align-items-center another">
                <div className="countryWraper">
                  <Select
                    data={contryList}
                    Icon={<LocationOnOutlined />}
                    placeholder="Your Location"
                  />
                </div>
                <div className="list list-inline mb-0 headerTabs ml-auto">
                  <li className="list-inline-item">
                    <span>
                      <img src={IconCompare} />
                      <span className="bedge  rounded-circle">3</span>
                      Compare
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <img src={IconWishlist} />
                      <span className="bedge  rounded-circle">6</span>
                      Wishlist
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/cart">
                      <span>
                        <img src={IconCart} />
                        {cartItemlength !== 0 && (
                          <span className="bedge  rounded-circle">
                            {cartItemlength}
                          </span>
                        )}
                        Cart
                      </span>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <span
                      onClick={() => setAccountDropDown(!accountDropDown)}
                      onMouseEnter={() => setAccountDropDown(true)}

                      // onMouseLeave={() => setAccountDropDown(false)}
                    >
                      <img src={IconUser} />
                      {/* <span className="bedge  rounded-circle">2</span>   */}
                      Account
                    </span>
                    {accountDropDown && (
                      <ClickAwayListener
                        onClickAway={() => setAccountDropDown(false)}
                      >
                        <ul
                          className="DropDownMenu"
                          onMouseEnter={() => setAccountDropDown(true)}
                          onMouseLeave={() => setAccountDropDown(false)}
                        >
                          <li>
                            <Button>
                              {" "}
                              <Person2OutLinedIcon />
                              My Account
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <LocationOnOutlined /> Order Tracking
                            </Button>
                          </li>

                          <li>
                            <Button>
                              {" "}
                              <FavoriteBorderOutlined />
                              My Wishlist
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <SettingsOutlined /> Setting
                            </Button>
                          </li>
                          <li>
                            <Button>
                              {" "}
                              <LogoutOutlined /> Sign Out
                            </Button>
                          </li>
                        </ul>
                      </ClickAwayListener>
                    )}
                  </li>
                </div>
              </div>
            </div>
          </div>
        </header>
        {data !== undefined && <Nav data={data} />}
      </div>
      <div className="AfterHeader"></div>
    </>
  );
};

export default Header;
