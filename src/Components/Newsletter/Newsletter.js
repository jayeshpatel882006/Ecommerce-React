import React from "react";
import "./newsLetter.css";

import { Button } from "@mui/material";
import { SendOutlined } from "@mui/icons-material";
const Newsletter = () => {
  return (
    <>
      <div className="newsLetterBanner">
        <input type="text" placeholder="Your emaill address" />
        <SendOutlined className="newsLetterIcon" />
        <Button className="newsLetterButton">Subscribe</Button>
      </div>
    </>
  );
};

export default Newsletter;
