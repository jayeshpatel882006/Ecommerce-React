import React, { useState } from "react";
import "./details.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import Slider from "react-slick";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {
  FavoriteBorderOutlined,
  HeadsetMicOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  LocationOnOutlined,
  ShoppingCartOutlined,
  ShuffleOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Details = () => {
  const CategoryItems = [
    {
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg",
    },
    {
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg",
    },
    {
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg",
    },
    {
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-6.jpg",
    },
    {
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-7.jpg",
    },
    {
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-8.jpg",
    },
    {
      imglink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-9.jpg",
    },
  ];
  const [selected, setselected] = useState(
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
  );
  const [sizeSelected, setSizeSelected] = useState(2);
  const Sizes = ["50g", "60g", "80g", "100g", "150g"];
  const AdditionalInfo = [
    "Description",
    "Additional info",
    "Vendor",
    "Reviews",
  ];
  const [activeAdditionalInfo, setActiveAdditionalInfo] =
    useState("Description");
  const [qty, setQty] = useState(1);
  const RelatedProduct = [
    {
      imgLink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",
      bedgeBackground: "#f74b81",
      bedgetxt: "Hot",
      catName: "Snack",
      title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      rating: 2.5,
      brandName: "NestFood",
      newPrice: "20.10",
      oldPrice: "23.5",
    },
    {
      imgLink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg",
      bedgeBackground: "#f74b81",
      bedgetxt: "Hot",
      catName: "Hodo Foods",
      title: "All Natural Italian-Style Chicken Meatballs ",
      rating: 3.5,
      brandName: "Stouffer",
      newPrice: "52.85",
      oldPrice: "55.8",
    },
    {
      imgLink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg",
      bedgeBackground: "#f74b81",
      bedgetxt: "Hot",
      catName: "Snack",
      title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      rating: 4,
      brandName: "StarKist",
      newPrice: "48.85",
      oldPrice: "52.8",
    },
    {
      imgLink:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg",
      bedgeBackground: "#3bb77e",
      bedgetxt: "New",
      catName: "Snack",
      title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      rating: 4.0,
      brandName: "StarKist",
      newPrice: "48.85",
      oldPrice: "52.8",
    },
  ];
  const TableContent = [
    {
      name: "Stand Up",
      content: "35″L x 24″W x 37-45″H(front to back wheel)",
    },
    {
      name: "Folded (w/o wheels)",
      content: "32.5″L x 18.5″W x 16.5″H",
    },
    {
      name: "Folded (w/ wheels)	",
      content: "32.5″L x 24″W x 18.5″H",
    },
    {
      name: "Door Pass Through  ",
      content: "24",
    },
    {
      name: "Frame",
      content: "Aluminum",
    },
    {
      name: "Weight (w/o wheels)",
      content: "20 LBS",
    },
    {
      name: "Weight Capacity",
      content: "60 LBS",
    },
    {
      name: "Width",
      content: "24″",
    },
    {
      name: "Handle height (ground to handle)",
      content: "37-45″",
    },
    {
      name: "Wheels",
      content: "12″ air / wide track slick tread",
    },
    {
      name: "Seat back height",
      content: "21.5″",
    },
    {
      name: "Head room (inside canopy)",
      content: "25″",
    },
    {
      name: "Color",
      content: "Black, Blue, Red, White",
    },
    {
      name: "Size",
      content: "M,S",
    },
  ];
  const Users = [
    {
      name: "Sienna",
      imgScr:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png",
      date: "December 4, 2022 at 3:12 pm",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?",
    },
    {
      name: "Brenna",
      imgScr:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-3.png",
      date: "December 4, 2022 at 3:12 pm",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?",
    },
    {
      name: "Gemma",
      imgScr:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-4.png",
      date: "December 4, 2022 at 3:12 pm",
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?",
    },
    {
      name: "Brenna",
      imgScr:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-3.png",
      date: "December 4, 2022 at 3:12 pm",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    // speed: 300,
    // centerMode: true,
    slidesToShow: 4,
    fade: false,
    arrows: true,
  };

  return (
    <section className="detailsPage">
      <div className="breadCrumbWerper">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="text-g transition" to="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="text-g transition"> Vegetables & Tubers </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link className="text-g transition"> Seeds Of Change Organic</Link>
          </li>
        </ul>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 part1">
            <div className="row">
              <div className="col-md-5 ">
                <div className="productImg">
                  <InnerImageZoom
                    className="w-100"
                    src={selected}
                    zoomType="hover"
                    zoomScale={2}
                    width={500}
                  />
                </div>
                <div className="imgSlider">
                  <Slider {...settings} className="cat_slider_Main w-100">
                    {CategoryItems !== 0 &&
                      CategoryItems.map((ite, index) => (
                        <div className="item" key={index}>
                          <img
                            src={ite.imglink}
                            alt=".."
                            className={`w-100 ${
                              selected === ite.imglink ? "selected" : ""
                            }`}
                            onClick={(e) => setselected(ite.imglink)}
                          />
                        </div>
                      ))}
                  </Slider>
                </div>
              </div>
              <div className="col-md-7 productInfo">
                <h3>Seeds of Change Organic Quinoa, Brown</h3>
                <div className="d-flex align-items-center mb-4">
                  <Rating
                    className="rating"
                    name="read-only"
                    value={3}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                  <span className="text-success">(34 reviews)</span>
                </div>
                <div className="priceSec d-flex align-items-center">
                  <span className="text-g Price">$36</span>
                  <div className="ms-3 d-flex flex-column align-item-center justify-content-center">
                    <span className="text-org offPercent">26% off</span>
                    <span className=" oldPrice">$37</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam rem officia, corrupti reiciendis minima nisi modi,
                  quasi, odio minus dolore impedit fuga eum eligendi.Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Aliquam rem
                  officia, corrupti reiciendis minima nisi modi, quasi, odio
                  minus dolore impedit fuga eum eligendi.
                </p>
                <br />
                <div className="Productsize d-flex align-items-center">
                  <span>Size / Weight:</span>
                  <ul className="list list-inline mb-0 ps-2">
                    {Sizes.map((ite, index) => (
                      <li className="list-inline-item" key={index}>
                        <Link
                          onClick={() => setSizeSelected(index)}
                          className={`tag transition ${
                            sizeSelected === index ? "sizeSelected" : ""
                          }`}
                        >
                          {ite}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="addToCartStrip d-flex align-items-center">
                  <div className="quantity">
                    <Button
                      className="text-g addQty"
                      onClick={() => setQty(qty + 1)}
                    >
                      <KeyboardArrowUpOutlined />
                    </Button>
                    <input
                      type="number"
                      min={1}
                      defaultValue={1}
                      onChange={(e) => setQty(e.target.value)}
                      value={qty}
                    />
                    <Button
                      className="text-g lowQty"
                      onClick={() => {
                        if (qty !== 1) {
                          setQty(qty - 1);
                        }
                      }}
                    >
                      <KeyboardArrowDownOutlined />
                    </Button>
                  </div>
                  <Button className="addToCartBtn transition">
                    <ShoppingCartOutlined /> Add To Cart
                  </Button>
                  <Button className="addToCartOtherBtn transition">
                    <FavoriteBorderOutlined />
                  </Button>
                  <Button className="addToCartOtherBtn transition">
                    <ShuffleOutlined />
                  </Button>
                </div>
                <div className="smallDetails">
                  <ul className="pt1">
                    <li>
                      Type:<span className="text-g"> Organic</span>
                    </li>
                    <li>
                      MFG:<span className="text-g">Jun 4.2022</span>
                    </li>
                    <li>
                      LIFE:<span className="text-g"> 70 days</span>
                    </li>
                  </ul>
                  <ul className="pt2">
                    <li>
                      SKU:<span className="text-g"> FWM15VKT</span>
                    </li>
                    <li>
                      Tags:<span className="text-g">Snack, Organic, Brown</span>
                    </li>
                    <li>
                      Stock:<span className="text-g">8 Items InStock</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="PRODUCTINFO border-0 shadow">
              <ul className="navLine list list-inline">
                {AdditionalInfo.map((ite, index) => (
                  <li
                    className={`list-inline-item ${
                      activeAdditionalInfo === ite ? "Active" : ""
                    }`}
                    key={index}
                    onClick={() => {
                      if (activeAdditionalInfo !== ite) {
                        setActiveAdditionalInfo(ite);
                      }
                    }}
                  >
                    <Button>
                      {ite === "Reviews"
                        ? "Reviews (" + Users.length + ")"
                        : ite}
                    </Button>
                  </li>
                ))}
              </ul>
              <div className="displayAdditionalInfo">
                {activeAdditionalInfo === "Description" && (
                  <div className="DescriptionDisplay">
                    <p>
                      Uninhibited carnally hired played in whimpered dear
                      gorilla koala depending and much yikes off far quetzal
                      goodness and from for grimaced goodness unaccountably and
                      meadowlark near unblushingly crucial scallop tightly
                      neurotic hungrily some and dear furiously this apart.
                      Spluttered narrowly yikes left moth in yikes bowed this
                      that grizzly much hello on spoon-fed that alas rethought
                      much decently richly and wow against the frequent fluidly
                      at formidable acceptably flapped besides and much circa
                      far over the bucolically hey precarious goldfinch mastodon
                      goodness gnashed a jellyfish and one however because.
                    </p>
                    <ul>
                      <li>
                        <span>Type Of Packing</span>Bottle
                      </li>
                      <li>
                        <span>Color</span>Green, Pink, Powder Blue, Purple
                      </li>
                      <li>
                        <span>Quantity Per Case</span>100ml
                      </li>
                      <li>
                        <span>Ethyl Alcohol</span>70%
                      </li>
                      <li>
                        <span>Piece In One</span>Carton
                      </li>
                    </ul>
                    <hr />
                    <p>
                      Laconic overheard dear woodchuck wow this outrageously
                      taut beaver hey hello far meadowlark imitatively
                      egregiously hugged that yikes minimally unanimous pouted
                      flirtatiously as beaver beheld above forward energetic
                      across this jeepers beneficently cockily less a the
                      raucously that magic upheld far so the this where crud
                      then below after jeez enchanting drunkenly more much wow
                      callously irrespective limpet.
                    </p>
                    <h4>Packaging & Delivery</h4>
                    <p>
                      Less lion goodness that euphemistically robin
                      expeditiously bluebird smugly scratched far while thus
                      cackled sheepishly rigid after due one assenting regarding
                      censorious while occasional or this more crane went more
                      as this less much amid overhung anathematic because much
                      held one exuberantly sheep goodness so where rat wry well
                      concomitantly.
                    </p>
                    <p>
                      Scallop or far crud plain remarkably far by thus far
                      iguana lewd precociously and and less rattlesnake contrary
                      caustic wow this near alas and next and pled the yikes
                      articulate about as less cackled dalmatian in much less
                      well jeering for the thanks blindly sentimental whimpered
                      less across objectively fanciful grimaced wildly some wow
                      and rose jeepers outgrew lugubrious luridly irrationally
                      attractively dachshund.
                    </p>
                    <hr />
                    <h4>Suggested Use</h4>
                    <ul className="mb-4">
                      <li>Refrigeration not necessary.</li>
                      <li>Stir before serving</li>
                    </ul>
                    <h4>Other Ingredients</h4>
                    <ul className="mb-4">
                      <li>Organic raw pecans, organic raw cashews.</li>
                      <li>
                        This butter was produced using a LTG (Low Temperature
                        Grinding) process
                      </li>
                      <li>
                        Made in machinery that processes tree nuts but does not
                        process peanuts, gluten, dairy or soy
                      </li>
                    </ul>
                    <h4>Warnings</h4>
                    <ul>
                      <li>
                        Oil separation occurs naturally. May contain pieces of
                        shell.
                      </li>
                    </ul>
                  </div>
                )}
                {activeAdditionalInfo === "Additional info" && (
                  <div className="AdditionalInfoDisplay">
                    <table className="Additionaltable">
                      {TableContent.map((ite, index) => (
                        <tr key={index}>
                          <th>{ite.name}</th>
                          <td>
                            <p>{ite.content}</p>
                          </td>
                        </tr>
                      ))}
                    </table>
                  </div>
                )}
                {activeAdditionalInfo === "Vendor" && (
                  <div className="VendorDisplay">
                    <div className="Company d-flex">
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-18.svg"
                        alt=".."
                      />
                      <div className="CompanyInfo">
                        <h4>
                          <Link className="text-g transition">Noodles Co.</Link>
                        </h4>
                        <div className="reting">
                          <Rating
                            className="rating"
                            name="read-only"
                            value={4.5}
                            precision={0.5}
                            size="small"
                            readOnly
                          />
                          <p>(32 reviews)</p>
                        </div>
                      </div>
                    </div>
                    <div className="otherCompanyInfo">
                      <h5>
                        <span>
                          <LocationOnOutlined />
                          Address
                        </span>
                        : 5171 W Campbell Ave undefined Kent, Utah 53127 United
                        States
                      </h5>
                      <h5>
                        <span>
                          <HeadsetMicOutlined />
                          Contact Seller
                        </span>
                        :(+91) - 540-025-553
                      </h5>
                    </div>
                    <div className="qualom3 d-flex">
                      <div className="Q1">
                        <p>Rating</p>
                        <h4>92%</h4>
                      </div>
                      <div className="Q2">
                        <p>Ship on time</p>
                        <h4>100%</h4>
                      </div>
                      <div className="Q3">
                        <p>Chat response</p>
                        <h4>89%</h4>
                      </div>
                    </div>
                    <p>
                      Noodles & Company is an American fast-casual restaurant
                      that offers international and American noodle dishes and
                      pasta in addition to soups and salads. Noodles & Company
                      was founded in 1995 by Aaron Kennedy and is headquartered
                      in Broomfield, Colorado. The company went public in 2013
                      and recorded a $457 million revenue in 2017.In late 2018,
                      there were 460 Noodles & Company locations across 29
                      states and Washington, D.C.
                    </p>
                  </div>
                )}
                {activeAdditionalInfo === "Reviews" && (
                  <div className="ReviewsDisplay">
                    <div className="commentArea">
                      <div className="row">
                        <div className="col-md-8">
                          <h4>Customer questions & answers</h4>
                          <div className="commentList">
                            {Users.map((ite, index) => (
                              <div
                                className="user shadow border-0 transition"
                                key={index}
                              >
                                <div className="thumb">
                                  <img src={ite.imgScr} alt="..." />
                                  <h5 className="text-g">{ite.name}</h5>
                                </div>
                                <div className="desc">
                                  <div className="upperSection">
                                    <p>{ite.date}</p>
                                    <Rating
                                      className="rating"
                                      name="read-only"
                                      value={ite.rating}
                                      precision={0.5}
                                      size="small"
                                      readOnly
                                    />
                                  </div>
                                  <div className="lowerSection">
                                    <p>
                                      {ite.description}
                                      <h6 className="reply transition">
                                        <Button className="text-g transition">
                                          Reply
                                        </Button>
                                      </h6>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="col-md-4 halfRatingSection">
                          <h4>Customer reviews</h4>

                          <div className="rating d-flex">
                            <Rating
                              className="rating"
                              name="read-only"
                              value={4.8}
                              precision={0.1}
                              size="small"
                              readOnly
                            />
                            <h6>4.8 out of 5</h6>
                          </div>
                          <div className="allProgeshBar">
                            <div className="progressBarWerper">
                              <p>5 Star</p>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{ width: "50%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  50%
                                </div>
                              </div>
                            </div>
                            <div className="progressBarWerper">
                              <p>4 Star</p>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{ width: "25%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  25%
                                </div>
                              </div>
                            </div>
                            <div className="progressBarWerper">
                              <p>3 Star</p>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{ width: "43%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  43%
                                </div>
                              </div>
                            </div>
                            <div className="progressBarWerper">
                              <p>2 Star</p>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{ width: "63%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  63%
                                </div>
                              </div>
                            </div>
                            <div className="progressBarWerper">
                              <p>1 Star</p>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{ width: "81%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  81%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CommentForm"></div>
                  </div>
                )}
              </div>
            </div>
            <div className="RetatedProductDisplay">
              <h4>Related products</h4>
              <div className="innreDiv">
                {RelatedProduct.map((ite, index) => (
                  <div className="item">
                    <ProductCard Data={ite} key={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-2 part2 me-auto">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
