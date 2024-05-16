import React from "react";
import "./nav.css";

import Button from "@mui/material/Button";
import { GridView, HeadsetMic, KeyboardArrowDown } from "@mui/icons-material";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav d-flex align-items-center">
      <div className="container-fluid">
        <div className="row position-relative">
          <div className="col-sm-2 part1 d-flex align-items-center">
            <Button className="bg-g text-white catTab ">
              <GridView />
              Browse All Category <KeyboardArrowDown />
            </Button>
          </div>
          <div className="col-sm-8 part2 position-static">
            <nav>
              <ul className="list list-inline mb-0">
                <li className="list-inline-item">
                  <Button>
                    <Link to="/">Home</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/about">About</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Shop</Link>
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
                      <div className="col">
                        <h4 className="text-g">Fruit & Vegetables</h4>
                        <ul className="mt-4 mb-0 ">
                          <li>
                            <Link>Meat & Poultry</Link>
                          </li>
                          <li>
                            <Link>Fresh Vegetables</Link>
                          </li>
                          <li>
                            <Link>Herbs & Seasonings</Link>
                          </li>
                          <li>
                            <Link>Cuts & Sprouts</Link>
                          </li>
                          <li>
                            <Link>Exotic Fruits & Veggies</Link>
                          </li>
                          <li>
                            <Link>Packaged Produce</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <h4 className="text-g">Breakfast & Dairy</h4>
                        <ul className="mt-4 mb-0 ">
                          <li>
                            <Link>Milk & Flavoured Milk</Link>
                          </li>
                          <li>
                            <Link>Butter and Margarine</Link>
                          </li>
                          <li>
                            <Link>Eggs Substitutes</Link>
                          </li>
                          <li>
                            <Link>Marmalades</Link>
                          </li>
                          <li>
                            <Link>Sour Cream</Link>
                          </li>
                          <li>
                            <Link>Cheese</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <h4 className="text-g">Meat & Seafood</h4>
                        <ul className="mt-4 mb-0 ">
                          <li>
                            <Link>Breakfast Sausage</Link>
                          </li>
                          <li>
                            <Link>Dinner Sausage</Link>
                          </li>
                          <li>
                            <Link>Chicken</Link>
                          </li>
                          <li>
                            <Link>Sliced Deli Meat</Link>
                          </li>
                          <li>
                            <Link>Wild Caught Fillets</Link>
                          </li>
                          <li>
                            <Link>Crab and Shellfish</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <img
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png"
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Blog</Link>
                  </Button>
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
  );
};

export default Nav;
