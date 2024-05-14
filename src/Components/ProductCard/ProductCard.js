import React from "react";
import "./productCard.css";

import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {
  CompareArrowsOutlined,
  FavoriteBorderSharp,
  ShoppingCartOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
const ProductCard = ({ Data }) => {
  return (
    <div className="ProductThumb transition position-relative">
      <div className="imgWreper cursor  position-relative">
        <img src={Data?.imgLink} className="w-100 transition" />

        <div className="overlay transition">
          <Link
            tooltip="Add To Wishlist"
            className="actionBtn  bt-1 transition mb-0 mt-0"
          >
            <FavoriteBorderSharp />
          </Link>
          <Link
            tooltip="Compare"
            className="actionBtn bt-2 transition mb-0 mt-0"
          >
            <CompareArrowsOutlined />
          </Link>
          <Link
            tooltip="Quick view"
            className="actionBtn bt-3 transition mb-0 mt-0"
          >
            <VisibilityOutlined />
          </Link>
        </div>
      </div>
      {Data?.bedgetxt && (
        <div className="Bedge">
          <span style={{ background: Data.bedgeBackground }}>
            {Data.bedgetxt}
          </span>
        </div>
      )}
      <div className="info">
        <span className="d-block catname">{Data?.catName}</span>
        <h4 className="title">
          <Link>{Data?.title}</Link>
        </h4>
        <Rating
          className="rating"
          name="read-only"
          value={Data?.rating}
          precision={0.5}
          size="small"
          readOnly
        />

        <span className="brand d-block">
          By <Link>{Data?.brandName}</Link>
        </span>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <span className="price">${Data?.newPrice} </span>
            <span className="oldprice">${Data?.oldPrice} </span>
          </div>
          <Button
            className="btnAdd transition"
            style={{ background: "#DEF9EC" }}
          >
            <ShoppingCartOutlined /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
