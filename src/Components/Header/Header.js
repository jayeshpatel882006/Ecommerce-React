import React, { useContext, useEffect, useRef, useState } from "react";
import "./Header.css";
import "./Headerresponsive.css";
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
  ArrowBackIos,
  FavoriteBorderOutlined,
  LocationOnOutlined,
  LogoutOutlined,
  Menu,
  PersonOutline,
  SettingsOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Person2OutLinedIcon from "@mui/icons-material/Person2Outlined";
import Nav from "./nav/Nav";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

const Header = ({ data }) => {
  const [accountDropDown, setAccountDropDown] = useState(false);
  const [cartItemlength, setCartItemLength] = useState(0);
  const [is_LogedIn, setis_LogedIn] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuToggal, setMenuToggal] = useState(false);
  const headerRef = useRef();
  const serchref = useRef();
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const [serchsee, setsearchsee] = useState(false);
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
    setis_LogedIn(context.isLogedIn);
  }, [context]);

  const getContry = async () => {
    // context.setIsloading(true);

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
          // context.setIsloading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handalSignOut = () => {
    // console.log("EYs");
    console.log(context.isLogedIn);
    context.handalLogOut();
    navigate("/");
  };

  useEffect(() => {
    getContry();
    window.addEventListener("scroll", () => {
      let position = window.scrollY;
      if (position > 100) {
        headerRef.current?.classList.add("fixed");
      } else {
        headerRef.current?.classList.remove("fixed");
      }
    });
  }, []);

  return (
    <>
      <div className="headerWreper" ref={headerRef}>
        <header className="container-fluid">
          {/* <header> */}

          <div className="row w-100">
            <div className="col-sm-2 part1 d-flex headerLogo align-items-center">
              <Link to={"/"}>
                <img src={Logo} loading="lazy" className="Mainlogo" />
              </Link>

              <div className=" ms-auto headerToggalWreper d-flex align-items-center">
                <div className="headerToggal ">
                  <Button
                    onClick={() => {
                      setsearchsee(true);
                      serchref.current.focus();
                    }}
                  >
                    <SearchIcon />
                  </Button>
                </div>
                <div
                  onClick={() => setMenuToggal(true)}
                  className="headerToggal "
                >
                  <Button>
                    <Menu />
                  </Button>
                </div>
                <div className="headerToggal headerTabsresponsive  ">
                  <Button>
                    <Link to={is_LogedIn === true && "/cart"}>
                      <span>
                        <ShoppingCartOutlined />
                        {/* {cartItemlength !== 0 && (
                        <span className="bedge  rounded-circle">
                          {cartItemlength}
                          </span>
                        )} */}
                        <span className="bedge  rounded-circle">3</span>
                      </span>
                    </Link>
                  </Button>
                </div>
                {is_LogedIn && (
                  <div className="myAccDrop">
                    <Button>
                      <PersonOutline />
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div className="col-sm-5 part2 d-flex  align-items-center">
              <div
                className={`headerSerch headerSerchResponsive ${
                  serchsee === true ? "open" : ""
                } d-flex align-items-center`}
              >
                <div
                  className="closeSearch"
                  onClick={() => {
                    setsearchsee(false);
                    serchref.current.blur();
                    serchref.current.value = "";
                  }}
                >
                  <ArrowBackIos />
                </div>
                <div className="countryWraper">
                  <Select
                    data={contryList}
                    Icon={<LocationOnOutlined style={{ opacity: "0.5" }} />}
                    placeholder="Your Location"
                    txtlength={30}
                  />
                </div>

                <Select data={category} placeholder="All Category" />
                <div className="search ">
                  <input
                    type="text"
                    placeholder="Search for items..."
                    ref={serchref}
                  />
                  <SearchIcon className="searchIcon cursor" />
                </div>
              </div>
            </div>
            {/* <div className="Phonebutton">
              <GridViewOutlined />
            </div> */}
            <div className="col-sm-5 part3 d-flex  align-items-center leftHendSide">
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
                      <img src={IconCompare} loading="lazy" />
                      <span className="bedge  rounded-circle">3</span>
                      Compare
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <img src={IconWishlist} loading="lazy" />
                      <span className="bedge  rounded-circle">6</span>
                      Wishlist
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <Link to={is_LogedIn === true && "/cart"}>
                      <span>
                        <img src={IconCart} loading="lazy" />
                        {cartItemlength !== 0 &&
                          cartItemlength !== undefined && (
                            <span className="bedge  rounded-circle">
                              {cartItemlength}
                            </span>
                          )}
                        Cart{cartItemlength}
                      </span>
                    </Link>
                  </li>
                  {!is_LogedIn === true ? (
                    <li className="list-inline-item">
                      <Link to="/auth/login">
                        <Button className="btn-green">Login</Button>
                      </Link>
                    </li>
                  ) : (
                    <li className="list-inline-item">
                      <span
                        onClick={() => setAccountDropDown(!accountDropDown)}
                        onMouseEnter={() => setAccountDropDown(true)}

                        // onMouseLeave={() => setAccountDropDown(false)}
                      >
                        <img src={IconUser} loading="lazy" />
                        <span className="bedge  rounded-circle">2</span>
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
                              <Button onClick={handalSignOut}>
                                <LogoutOutlined /> Sign Out
                              </Button>
                            </li>
                          </ul>
                        </ClickAwayListener>
                      )}
                    </li>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* {data !== undefined && <Nav data={data} />} */}
        <Nav
          data={data}
          menutoggal={menuToggal}
          setMenuToggal={setMenuToggal}
        />
      </div>
      <div className="AfterHeader"></div>
    </>
  );
};

export default Header;
