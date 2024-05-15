import React from "react";
import "./Footer.css";
import img1 from "../../assets/images/icon-1.svg";
import img2 from "../../assets/images/icon-2.svg";
import img3 from "../../assets/images/icon-3.svg";
import img4 from "../../assets/images/icon-4.svg";
import img5 from "../../assets/images/icon-5.svg";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import imgbg from "../../assets/images/banner-9.png";
import {
  AccessTimeOutlined,
  HeadsetMic,
  HeadsetMicOutlined,
  LocationOnOutlined,
  SendOutlined,
} from "@mui/icons-material";
import Newsletter from "../Newsletter/Newsletter";
const Footer = () => {
  return (
    <>
      <section className="NewsLetter">
        <div className="container-fluid ">
          <div className="newslettrebox">
            <div className="d-flex">
              <div className="info">
                <h2>Stay home & get your daily needs from our shop</h2>
                <span>Start You'r Daily Shopping with Nest Mart</span>
                <Newsletter />
              </div>
              <div className="img ">
                <img src={imgbg} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footerWreper ">
        <div className="footerBoxs">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="box d-flex align-items-center justify-content-center  w-100">
                  <span className="transition">
                    <img src={img1} />
                  </span>
                  <div className="info">
                    <h4>Best prices & offers</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center justify-content-center  w-100 ">
                  <span className="transition">
                    <img src={img2} />
                  </span>
                  <div className="info">
                    <h4>Free delivery</h4>
                    <p>24/7 amazing services</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center justify-content-center  w-100">
                  <span className="transition">
                    <img src={img3} />
                  </span>
                  <div className="info">
                    <h4>Great daily deal</h4>
                    <p>When you sign up</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center justify-content-center  w-100">
                  <span className="transition">
                    <img src={img4} />
                  </span>
                  <div className="info">
                    <h4>Wide assortment</h4>
                    <p>Mega Discounts</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center justify-content-center  w-100">
                  <span className="transition">
                    <img src={img5} />
                  </span>
                  <div className="info">
                    <h4>Easy returns</h4>
                    <p>Within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container-fluid">
            <div className="Line"></div>
            <div className="row">
              <div className="col-sm-3 part1">
                <Link>
                  <img src={Logo} />
                </Link>
                <br />

                <p>Awesome grocery store website</p>
                <br />
                <p>
                  <LocationOnOutlined />
                  <strong>Address</strong> : Suthar Faliyu , Luna , Padra
                </p>
                <p>
                  <HeadsetMicOutlined />
                  <strong>Call Us</strong>
                  :(+91) - 9106073301
                </p>
                <p className="email">
                  <SendOutlined />
                  <strong>Email</strong>:
                  <a href="mailto:jayeshpatelswami0@gmail.com">
                    jayeshpatelswami0@gmail.com
                  </a>
                </p>
                <p>
                  <AccessTimeOutlined />
                  <strong>Hours</strong>:10:00 - 18:00, Mon - Sat
                </p>
              </div>
              <div className="col-sm-6 part2">
                <div className="row">
                  <div className="col subPart1">
                    <h4>Company</h4>
                    <p>
                      <Link>About Us</Link>
                    </p>
                    <p>
                      <Link>Delivery Information</Link>
                    </p>
                    <p>
                      <Link>Privacy Policy</Link>
                    </p>
                    <p>
                      <Link>Terms & Conditions</Link>
                    </p>
                    <p>
                      <Link>Contact Us</Link>
                    </p>
                    <p>
                      <Link>Support Center</Link>
                    </p>
                    <p>
                      <Link>Careers</Link>
                    </p>
                  </div>
                  <div className="col subPart2">
                    <h4>Account</h4>
                    <p>
                      <Link> Sign In</Link>
                    </p>
                    <p>
                      <Link>View Cart</Link>
                    </p>
                    <p>
                      <Link>My Wishlist</Link>
                    </p>
                    <p>
                      <Link>Track My Order</Link>
                    </p>
                    <p>
                      <Link>Help Ticket</Link>
                    </p>
                    <p>
                      <Link>Shipping Details</Link>
                    </p>
                    <p>
                      <Link>Compare products</Link>
                    </p>
                  </div>
                  <div className="col subPart3">
                    <h4>Corporate</h4>
                    <p>
                      <Link>Become a Vendor</Link>
                    </p>
                    <p>
                      <Link>Affiliate Program</Link>
                    </p>
                    <p>
                      <Link>Farm Business</Link>
                    </p>
                    <p>
                      <Link>Farm Careers</Link>
                    </p>
                    <p>
                      <Link>Our Suppliers</Link>
                    </p>
                    <p>
                      <Link>Accessibility</Link>
                    </p>
                    <p>
                      <Link>Promotions</Link>
                    </p>
                  </div>
                  <div className="col subPart4">
                    <h4>Popular</h4>
                    <p>
                      <Link>Milk & Flavoured Milk</Link>
                    </p>
                    <p>
                      <Link>Butter and Margarine</Link>
                    </p>
                    <p>
                      <Link>Eggs Substitutes</Link>
                    </p>
                    <p>
                      <Link>Marmalades</Link>
                    </p>
                    <p>
                      <Link>Sour Cream and Dips</Link>
                    </p>
                    <p>
                      <Link>Tea & Kombucha</Link>
                    </p>
                    <p>
                      <Link>Cheese</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 part3">
                <h4>My Links</h4>
                <p className="link">
                  <a
                    target="_blank"
                    href="https://github.com/jayeshpatel882006"
                  >
                    Go to My Github Account
                  </a>
                </p>
                <p className="link ">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/patel-jayesh-487211245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  >
                    Go to My Linkedin Account
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
