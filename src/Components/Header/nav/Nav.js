import React, { useEffect, useState } from "react";
import "./nav.css";

import Button from "@mui/material/Button";
import {
  ArrowBackIos,
  GridView,
  HeadsetMic,
  KeyboardArrowDown,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

const Nav = ({ data, menutoggal, setMenuToggal }) => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    setData(data);
  }, []);

  return (
    <>
      <div className="nav d-flex align-items-center">
        <div className="container-fluid">
          <div className="row position-relative">
            <div className="col-sm-2 part1 d-flex align-items-center">
              <Button className="bg-g text-white catTab res-hide">
                <GridView />
                Browse All Category <KeyboardArrowDown />
              </Button>
            </div>
            <div className="col-sm-8 part2 position-static">
              {window.innerWidth < 922 ? (
                <nav className={`${menutoggal ? "active" : ""}`}>
                  <div className="closeMenu">
                    <Button onClick={() => setMenuToggal(false)}>
                      <ArrowBackIos />
                    </Button>
                  </div>
                  <ul className="list list-inline mb-0">
                    <li className="list-inline-item">
                      <Button>
                        <Link to="/">Home</Link>
                      </Button>
                    </li>

                    {Data?.length !== 0 &&
                      Data?.map((item, index) => {
                        return (
                          <li className="list-inline-item" key={index}>
                            <Button>
                              <Link
                                to={`/cat/${item.cat_name?.toLowerCase()}`}
                                onClick={() =>
                                  sessionStorage.setItem("cat", item.cat_name)
                                }
                              >
                                {item.cat_name}
                                {item.items && <KeyboardArrowDown />}
                              </Link>
                            </Button>
                            {/* {item.items?.length !== 0 && ( */}
                            <div className="dropDown_Menu">
                              <ul>
                                {item.items?.map((item_, index1) => (
                                  <li key={index1}>
                                    <Button>
                                      <Link
                                        to={`/cat/${item.cat_name?.toLowerCase()}/${item_.cat_name
                                          .replace(/\s/g, "-")
                                          .toLowerCase()}`}
                                        onClick={() =>
                                          sessionStorage.setItem(
                                            "cat",
                                            item.cat_name
                                          )
                                        }
                                      >
                                        {item_.cat_name}
                                      </Link>
                                    </Button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {/* )} */}
                          </li>
                        );
                      })}

                    <li className="list-inline-item">
                      <Button>
                        <Link to="/about">About</Link>
                      </Button>
                    </li>

                    <li className="list-inline-item">
                      <Button>
                        <Link>Vendors</Link>
                      </Button>
                    </li>
                    <li className="list-inline-item position-static">
                      <Button>
                        <Link>
                          Mega Menu <KeyboardArrowDown />
                        </Link>
                      </Button>
                      <div className="dropDown_Menu megaMenu w-100">
                        <div className="row">
                          {Data?.length !== 0 &&
                            Data?.map((item, index) => {
                              return (
                                <div className="col" key={index}>
                                  <h4 className="text-g">{item.cat_name}</h4>
                                  <ul className="mt-4 mb-0 ">
                                    {item.items?.map((item_, index1) => (
                                      <li key={index1}>
                                        <Link
                                          to={`/cat/${item.cat_name?.toLowerCase()}/${item_.cat_name
                                            .replace(/\s/g, "-")
                                            .toLowerCase()}`}
                                        >
                                          {item_.cat_name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            })}

                          <div className="col">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png"
                              className="w-100"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="list-inline-item">
                      <Button>
                        <Link>
                          Pages <KeyboardArrowDown />
                        </Link>
                      </Button>

                      <div className="dropDown_Menu">
                        <ul>
                          <li>
                            <Button>
                              <Link to="/">Home</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link to="/products/details">Display</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link to="/listing">Listing</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link to="/about">About Us</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Contact</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>My Account</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Login</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Register</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Forgot password</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Reset password</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Purchase Guide</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Privacy Policy</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Privacy Policy</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Terms of Service</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link to="/sfaew">404 Page</Link>
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <Button>
                        <Link>Contect</Link>
                      </Button>
                    </li>
                  </ul>
                </nav>
              ) : (
                <nav>
                  {window.innerWidth < 922 && (
                    <div className="navOverLay"></div>
                  )}
                  <ul className="list list-inline mb-0">
                    <li className="list-inline-item">
                      <Button>
                        <Link to="/">Home</Link>
                      </Button>
                    </li>

                    {Data?.length !== 0 &&
                      Data?.map((item, index) => {
                        return (
                          <li className="list-inline-item" key={index}>
                            <Button>
                              <Link
                                to={`/cat/${item.cat_name?.toLowerCase()}`}
                                onClick={() =>
                                  sessionStorage.setItem("cat", item.cat_name)
                                }
                              >
                                {item.cat_name}
                                {item.items && <KeyboardArrowDown />}
                              </Link>
                            </Button>
                            {/* {item.items?.length !== 0 && ( */}
                            <div className="dropDown_Menu">
                              <ul>
                                {item.items?.map((item_, index1) => (
                                  <li key={index1}>
                                    <Button>
                                      <Link
                                        to={`/cat/${item.cat_name?.toLowerCase()}/${item_.cat_name
                                          .replace(/\s/g, "-")
                                          .toLowerCase()}`}
                                        onClick={() =>
                                          sessionStorage.setItem(
                                            "cat",
                                            item.cat_name
                                          )
                                        }
                                      >
                                        {item_.cat_name}
                                      </Link>
                                    </Button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {/* )} */}
                          </li>
                        );
                      })}

                    <li className="list-inline-item">
                      <Button>
                        <Link to="/about">About</Link>
                      </Button>
                    </li>

                    <li className="list-inline-item">
                      <Button>
                        <Link>Vendors</Link>
                      </Button>
                    </li>
                    <li className="list-inline-item position-static">
                      <Button>
                        <Link>
                          Mega Menu <KeyboardArrowDown />
                        </Link>
                      </Button>
                      <div className="dropDown_Menu megaMenu w-100">
                        <div className="row">
                          {Data?.length !== 0 &&
                            Data?.map((item, index) => {
                              return (
                                <div className="col" key={index}>
                                  <h4 className="text-g">{item.cat_name}</h4>
                                  <ul className="mt-4 mb-0 ">
                                    {item.items?.map((item_, index1) => (
                                      <li key={index1}>
                                        <Link
                                          to={`/cat/${item.cat_name?.toLowerCase()}/${item_.cat_name
                                            .replace(/\s/g, "-")
                                            .toLowerCase()}`}
                                        >
                                          {item_.cat_name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            })}

                          <div className="col">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png"
                              className="w-100"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="list-inline-item">
                      <Button>
                        <Link>
                          Pages <KeyboardArrowDown />
                        </Link>
                      </Button>

                      <div className="dropDown_Menu">
                        <ul>
                          <li>
                            <Button>
                              <Link to="/">Home</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link to="/products/details">Display</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link to="/listing">Listing</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link to="/about">About Us</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Contact</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>My Account</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Login</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Register</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Forgot password</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Reset password</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Purchase Guide</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Privacy Policy</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Privacy Policy</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link>Terms of Service</Link>
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <Link to="/sfaew">404 Page</Link>
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <Button>
                        <Link>Contect</Link>
                      </Button>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
            <div className="col-sm-2 part3 d-flex align-items-center ">
              <div className="phno d-flex align-items-center ml-auto">
                <span>
                  <HeadsetMic />
                </span>
                <div className="info ml-3">
                  <h3 className="text-g mb-0">1800-9800</h3>
                  <p className="mb-0">24/7 Support Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
