import React, { useEffect, useState, useRef } from "react";
import "./details.css";
import { Link, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import Slider from "react-slick";
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
import axios from "axios";

const Details = ({ data }) => {
  const [currentProduct, setCurrentProduct] = useState();
  const { id } = useParams();
  const [bigImageSize, setBigImageSize] = useState([1000, 1000]);
  const [smlImageSize, setSmlImageSize] = useState([150, 150]);
  const [RelatedProduct, setRelatedProduct] = useState();
  const [Reviews, setReviews] = useState();
  const [review, setReview] = useState({
    name: "",
    rating: 0,
    text: "",
    productId: id,
  });
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const [ParentCatName, setParentCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const getCatName = () => {
    let parent = sessionStorage.getItem("parentcatName");
    setParentCatName(parent);
    setSubCatName(sessionStorage.getItem("subCatName"));

    let arr = [];
    data !== undefined &&
      data.map((ite) => {
        if (ite.cat_name.toLowerCase() === parent?.toLowerCase()) {
          ite.items.map((items) => {
            // console.log(items);
            items.products.map((items2) => {
              if (items2?.id !== parseInt(id)) {
                arr.push({
                  ...items2,
                  parentCatName: ite.cat_name,
                  subCatName: items.cat_name,
                });
              }
            });
            setRelatedProduct(arr);
          });
        }
      });
  };

  const handalSubmitReview = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/jayesh", review).then((res) => {
        console.log(res);
      });
      setReview({
        name: "",
        rating: 0,
        text: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getReview = async () => {
    let data = {};
    let revies = [];
    try {
      await axios.get("http://localhost:3000/jayesh").then((res) => {
        data = res.data;
      });
      data !== undefined &&
        data.map((item) => {
          if (item.productId === id) {
            revies.push({ ...item });
            // setReviews({ ...Reviews, item });
          }
        });
      const list = revies.filter(
        (item, index) => revies.indexOf(item) === index
      );
      setReviews(list);
      getReview();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReview();
    window.scrollTo(0, 0);
    // console.log(id);
    getCatName();

    data?.map((item) => {
      item.items?.map((ite2) => {
        ite2.products?.map((product) => {
          if (parseInt(product.id) === parseInt(id)) {
            setCurrentProduct(product);
          }
        });
      });
    });
  }, [id]);

  const Goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };

  const [sizeSelected, setSizeSelected] = useState(0);
  const AdditionalInfo = [
    "Description",
    "Additional info",
    "Vendor",
    "Reviews",
  ];
  const [activeAdditionalInfo, setActiveAdditionalInfo] =
    useState("Description");
  const [qty, setQty] = useState(1);
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

  var settings = {
    dots: false,
    infinite: true,
    // speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    fade: false,
    arrows: true,
  };

  var settings1 = {
    dots: false,
    infinite: true,
    // speed: 300,
    // centerMode: true,
    slidesToShow: 1,
    fade: true,
    arrows: false,
  };
  var settings2 = {
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
            <Link className="text-g transition" to={`/cat/${ParentCatName}`}>
              {ParentCatName}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link
              className="text-g transition"
              to={`/cat/${ParentCatName}/${subCatName}`}
            >
              {subCatName}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link className="text-g transition">
              {currentProduct?.productName?.length > 20
                ? currentProduct?.productName?.substr(0, 20) + "..."
                : currentProduct?.productName}
            </Link>
          </li>
        </ul>
      </div>

      <div className="container-fluid detailsContainer">
        <div className="w-100 part1">
          <div className="row">
            <div className="col-md-5 ">
              <div className="productZoom">
                <Slider
                  {...settings1}
                  className=" zoomSliderBig w-100"
                  ref={zoomSliderBig}
                >
                  {currentProduct !== undefined &&
                    currentProduct.productImages?.map((img, index) => (
                      <div className="item" key={index}>
                        <InnerImageZoom
                          zoomScale={1}
                          zoomType="hover"
                          imgAttributes={{
                            alt: `${img}?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`,
                          }}
                          src={`${img}?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}
                        />
                      </div>
                    ))}
                </Slider>

                {/* <InnerImageZoom
                  className="w-100"
                  src={selected}
                  zoomType="hover"
                  zoomScale={2}
                  width={500}
                  imgAttributes={{ alt: currentProduct?.catImg }}
                />
              </div>
              <div className="imgSlider">
                <Slider {...settings} className="cat_slider_Main w-100">
                  {currentProduct !== 0 &&
                    currentProduct?.productImages.map((ite, index) => (
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
                </Slider>*/}
              </div>
              <div className="zoomSlider">
                <Slider {...settings2} ref={zoomSlider}>
                  {currentProduct !== undefined &&
                    currentProduct.productImages?.map((img, index) => (
                      <div className="item" key={index}>
                        <img
                          src={`${img}?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                          onClick={() => Goto(index)}
                          className="w-100"
                          style={{ objectFit: "none", maxHeight: "160px" }}
                          loading="lazy"
                        />
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
            <div className="col-md-7 productInfo">
              <h3>{currentProduct?.productName}</h3>
              <div className="d-flex align-items-center mb-4">
                <Rating
                  className="rating"
                  name="read-only"
                  value={parseFloat(currentProduct?.rating)}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <span className="text-success">(34 reviews)</span>
              </div>
              <div className="priceSec d-flex align-items-center">
                <span className="text-g Price">Rs {currentProduct?.price}</span>
                <div className="ms-3 d-flex flex-column align-item-center justify-content-center">
                  {currentProduct?.discount !== undefined && (
                    <span className="text-org offPercent">
                      {currentProduct?.discount}% off
                    </span>
                  )}
                  <span className=" oldPrice">
                    Rs {currentProduct?.oldPrice}
                  </span>
                </div>
              </div>
              <p>{currentProduct?.description}</p>
              <br />
              {currentProduct?.weight?.length !== 0 && (
                <div className="Productsize d-flex align-items-center">
                  <ul className="list list-inline mb-0 ps-2">
                    <span> Weight :</span>
                    {currentProduct?.weight?.map((item, index) => (
                      <li className="list-inline-item" key={index}>
                        <Link
                          onClick={() => setSizeSelected(index)}
                          className={`tag transition ${
                            sizeSelected === index ? "sizeSelected" : ""
                          }`}
                        >
                          {item} gm
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {currentProduct?.SIZE?.length !== 0 &&
                currentProduct?.SIZE !== undefined && (
                  <div className="Productsize d-flex align-items-center">
                    <ul className="list list-inline mb-0 ps-2">
                      <span>Size :</span>
                      {currentProduct?.SIZE?.map((item, index) => (
                        <li className="list-inline-item" key={index}>
                          <Link
                            onClick={() => setSizeSelected(index)}
                            className={`tag transition ${
                              sizeSelected === index ? "sizeSelected" : ""
                            }`}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              {currentProduct?.RAM?.length !== 0 &&
                currentProduct?.RAM !== undefined && (
                  <div className="Productsize d-flex align-items-center">
                    <ul className="list list-inline mb-0 ps-2">
                      <span>Ram :</span>
                      {currentProduct?.RAM?.map((item, index) => (
                        <li className="list-inline-item" key={index}>
                          <Link
                            onClick={() => setSizeSelected(index)}
                            className={`tag transition ${
                              sizeSelected === index ? "sizeSelected" : ""
                            }`}
                          >
                            {item} Ram
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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
                      ? "Reviews (" + Reviews?.length + ")"
                      : ite}
                  </Button>
                </li>
              ))}
            </ul>
            <div className="displayAdditionalInfo">
              {activeAdditionalInfo === "Description" && (
                <div className="DescriptionDisplay">
                  <p>{currentProduct?.description}</p>
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
                    Noodles & Company is an American fast-casual restaurant that
                    offers international and American noodle dishes and pasta in
                    addition to soups and salads. Noodles & Company was founded
                    in 1995 by Aaron Kennedy and is headquartered in Broomfield,
                    Colorado. The company went public in 2013 and recorded a
                    $457 million revenue in 2017.In late 2018, there were 460
                    Noodles & Company locations across 29 states and Washington,
                    D.C.
                  </p>
                </div>
              )}
              {activeAdditionalInfo === "Reviews" && (
                <div className="ReviewsDisplay">
                  <div className="commentArea">
                    <div className="row">
                      <div className="col-md-8">
                        <h4>Customer questions & answers</h4>
                        <div className="commentList mt-5">
                          {Reviews?.length !== 0 ? (
                            Reviews?.map((ite, index) => (
                              <div
                                className="user shadow border-0 transition"
                                key={index}
                              >
                                <div className="thumb">
                                  <img
                                    src={
                                      "https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-3.png"
                                    }
                                    alt="..."
                                  />
                                  <h5 className="text-g">{ite.name}</h5>
                                </div>
                                <div className="desc">
                                  <div className="upperSection">
                                    <p>{ite.date}</p>
                                    <Rating
                                      className="rating me-auto"
                                      name="read-only"
                                      value={ite.rating}
                                      precision={0.5}
                                      size="small"
                                      readOnly
                                    />
                                  </div>
                                  <div className="lowerSection">
                                    <p>
                                      {ite.text}
                                      {/* <h6 className="reply transition">
                                        <Button className="text-g transition">
                                          Reply
                                        </Button>
                                      </h6> */}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <h5 className="m-5">No One Added The Review</h5>
                          )}
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
                  <div className="CommentForm col-md-8">
                    <form onSubmit={handalSubmitReview}>
                      <h4>Add Review</h4>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Write Review"
                          rows={5}
                          value={review.text}
                          onChange={(e) =>
                            setReview({ ...review, text: e.target.value })
                          }
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                              value={review.name}
                              onChange={(e) =>
                                setReview({ ...review, name: e.target.value })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <Rating
                              value={review.rating}
                              precision={0.5}
                              onChange={(e) =>
                                setReview({ ...review, rating: e.target.value })
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <Button
                          type="submit"
                          color="success"
                          className="btn-g btn-lg"
                        >
                          Submit Review
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="RealtedProductsWreper">
        {RelatedProduct !== undefined && (
          <div className="RetatedProductDisplay">
            <h4>Related products</h4>
            <div className="innreDiv">
              <Slider {...settings} className="w-100">
                {RelatedProduct?.map((ite, index) => (
                  <div className="item" key={index}>
                    <ProductCard Data={ite} key={index} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Details;
