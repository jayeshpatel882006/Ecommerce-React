import React, { useEffect, useState } from "react";
import "./select.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { LocationOnOutlined } from "@mui/icons-material";

const Select = ({ data, placeholder, Icon }) => {
  const [openselect, setOpenselect] = useState(false);
  const [select, setselect] = useState(0);
  const [listItem, setlistItem] = useState(data);
  const [listItem2, setListItem2] = useState(data);
  const [selectedItem, setSelecteditem] = useState(placeholder);
  useEffect(() => {
    setlistItem(data);
  }, []);

  //   console.log(data);
  const handalSearch = (e) => {
    let keyword = e.target.value.toLowerCase();

    let List = listItem2.filter((ite) => {
      return ite.toLowerCase().includes(keyword);
    });
    // setSelecteditem(List);
    let list2 = List.filter((item, index) => List.indexOf(item) === index);

    setlistItem(list2);
    // console.log(list2);
  };
  return (
    <ClickAwayListener onClickAway={() => setOpenselect(false)}>
      <div className="selecterDrop  position-relative">
        {Icon}
        {/* <qLocationOnOutlined style={{ opacity: "0.7" }} /> */}
        <span
          className="openselect cursor"
          onClick={() => setOpenselect(!openselect)}
        >
          {selectedItem?.length > 14
            ? selectedItem.substr(0, 14) + "..."
            : selectedItem}
          <KeyboardArrowDownIcon className="arrow" />
        </span>
        {openselect && (
          <div className="selectDrop">
            <div className="searchField">
              <input
                type="text"
                placeholder="search hear..."
                onChange={handalSearch}
              />
            </div>
            <ul className="serchResult">
              {/* <li
                onClick={() => {
                  setselect(0);
                  setOpenselect(false);
                  setSelecteditem("All Category");
                }}
                className={`${select === 0 ? "Active" : ""}`}
              >
                All Category
              </li> */}
              <li
                key={"1111"}
                onClick={() => {
                  setselect(0);
                  setOpenselect(false);
                  setSelecteditem(placeholder);
                  setlistItem(data);
                }}
                className={`${select === 0 ? "Active" : ""}`}
              >
                {placeholder}
              </li>
              {listItem &&
                listItem?.map((ite, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setselect(index + 1);
                      setOpenselect(false);
                      setSelecteditem(ite);
                      setlistItem(data);
                    }}
                    className={`${select === index + 1 ? "Active" : ""}`}
                  >
                    {ite}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
