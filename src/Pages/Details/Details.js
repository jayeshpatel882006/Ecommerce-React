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
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  ShoppingCartOutlined,
  ShuffleOnOutlined,
  ShuffleOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Details = () => {
  const [CategoryItems, setcategoryItems] = useState([
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
  ]);
  const [selected, setselected] = useState(
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
  );
  const [sizeSelected, setSizeSelected] = useState(2);
  const Sizes = ["50g", "60g", "80g", "100g", "150g"];
  const AdditionalInfo = [
    "Description",
    "Additional info",
    "Vendor",
    "Reviews (3)",
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
  var settings = {
    dots: false,
    infinite: true,
    // speed: 300,
    // centerMode: true,
    slidesToShow: 4,
    fade: false,
    arrows: true,
  };

  const ZoomSetting = { width: 400, height: 250, zoomWidth: 500, img: "1.jpg" };
  return (
    <section className="detailsPage">
      <div className="breadCrumbWerper">
        <ul class="breadcrumb">
          <li class="breadcrumb-item">
            <Link className="text-g transition" to="/">
              Home
            </Link>
          </li>
          <li class="breadcrumb-item">
            <Link className="text-g transition"> Vegetables & Tubers </Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
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
                    width={"100%"}
                  />
                </div>
                <div className="imgSlider">
                  <Slider {...settings} className="cat_slider_Main w-100">
                    {CategoryItems !== 0 &&
                      CategoryItems.map((ite, index) => (
                        <div className="item" key={index}>
                          <img
                            src={ite.imglink}
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
                      activeAdditionalInfo == ite ? "Active" : ""
                    }`}
                    key={index}
                    onClick={() => {
                      if (activeAdditionalInfo !== ite) {
                        setActiveAdditionalInfo(ite);
                      }
                    }}
                  >
                    <Button>{ite}</Button>
                  </li>
                ))}
              </ul>
              <div className="displayAdditionalInfo">
                {activeAdditionalInfo == "Description" && (
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
                {activeAdditionalInfo == "Additional info" && (
                  <div className="AdditionalInfoDisplay">
                    AdditionalInfoDisplay
                  </div>
                )}
                {activeAdditionalInfo == "Vendor" && (
                  <div className="VendorDisplay">VendorDisplay</div>
                )}
                {activeAdditionalInfo == "Reviews (3)" && (
                  <div className="ReviewsDisplay">ReviewsDisplay</div>
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
