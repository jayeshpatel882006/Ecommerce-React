import React from "react";
import { Rating } from "@mui/material";
import "./topProduct.css";

import img1 from "../../assets/images/thumbnail-1.jpg";
import { Link } from "react-router-dom";

const TopProducts = ({ title, Data }) => {
  return (
    <div className="topSelling_box ">
      <h3 className="cursor-text">{title}</h3>

      {Data &&
        Data.map((ite, index) => (
          <div
            className="items d-flex align-items-center transition"
            key={index}
          >
            <div className="img">
              <img src={ite.imgSrc} className="w-100" loading="lazy" />
            </div>
            <div className="info px-3">
              <Link>
                <h4 className="transition">{ite.titleName}</h4>
              </Link>
              <div className="d-flex align-items-center">
                <Rating
                  className="rating"
                  name="read-only"
                  value={ite.rating}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <span className="RatingSpan">({ite.rating})</span>
              </div>
              <div className="d-flex align-items-center">
                <span className="price">${ite.price} </span>
                <span className="oldprice">${ite.oldprice} </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TopProducts;
