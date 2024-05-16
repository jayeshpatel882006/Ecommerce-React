import React from "react";
import "./notfound.css";
import notfoundImg from "../../assets/images/page-404.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { HomeOutlined } from "@mui/icons-material";

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container-web">
        <div className="box">
          <img src={notfoundImg} />
          <br />
          <h3>Page Not Found</h3>
          <p>
            The link you clicked may be broken or the page may have been
            removed.
            <br /> visit the{" "}
            <Link to="/" className="text-g">
              Homepage
            </Link>{" "}
            or <Link className="text-g transition">Contact us</Link> about the
            problem
          </p>

          <Link to="/">
            <Button className="Btn transition">
              <HomeOutlined />
              Back To Home
            </Button>
          </Link>
        </div>
      </div>
      ;
    </section>
  );
};

export default NotFound;
