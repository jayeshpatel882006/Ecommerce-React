import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Rating } from "@mui/material";
import {
  DeleteOutline,
  KeyboardArrowUpOutlined,
  KeyboardArrowDownOutlined,
  Logout,
  ArrowBack,
  Update,
  ContentPasteOutlined,
} from "@mui/icons-material";
import axios from "axios";
import { MyContext } from "../../App";
const Cart = ({ cartData }) => {
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState();
  const context = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (context.isLogedIn != true) {
      navigate("/");
    }
  }, []);

  // const getCartData = async (url) => {
  //   let tempArr = [];

  //   await axios.get(url).then((res) => {
  //     res.data?.map((ite) => {
  //       tempArr.push({ ...ite, Subtotal: ite.price });
  //     });
  //   });
  //   setCartItems(tempArr);
  // };
  useEffect(() => {
    // getCartData("http://localhost:3000/cartItems");
    setCartItems(cartData);
  }, [cartData]);

  const updateCart = async (items, id, type) => {
    setCartItems(items);
    //context.setIsloading(true);
    let data;
    cartItems?.map(async (ite) => {
      if (ite.id === id) {
        data = ite;
        if (type === "plus") {
          data.quantity = data.quantity + 1;
        } else if (type === "minus") {
          data.quantity = data.quantity - 1;
        }
      }
    });
    await axios
      .put(`http://localhost:5000/cartItems/${parseInt(id)}`, data)
      .then((res) => {
        console.log(res.data);
        // context.setIsloading(false);
      });
  };

  const handalRemove = async (id) => {
    // context.setIsloading(false);
    try {
      await axios
        .delete(`http://localhost:5000/cartItems/${id}`)
        .then((res) => {
          // getCartData();
          context.removeFromCart(id);
          // context.setIsloading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
    // console.log(id);
  };
  const clearcart = async () => {
    // context.setIsloading(true);
    cartItems?.map(async (product) => {
      await axios
        .delete(`http://localhost:5000/cartItems/${parseInt(product.id)}`)
        .then((res) => {
          console.log(res.data);
          context.emptyCart();
          // context.setIsloading(false);
        });
    });
  };

  return (
    <section className="cart">
      <div className="breadCrumbWerper">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="text-g transition" to="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="text-g transition">Shop</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link className="text-g transition">cart</Link>
          </li>
        </ul>
      </div>
      <div className="container-web">
        <div className="row">
          <div className="col-md-9">
            <h2>Your Cart</h2>
            <div className="secondRowHeader">
              <p>There are {cartItems?.length} products in your cart</p>
              <Button
                className="clearbtn transition"
                onClick={() => clearcart()}
              >
                <DeleteOutline />
                Clear cart
              </Button>
            </div>
            <div className="mainContainer">
              <div className="table-responsive mt-4">
                <table className="table">
                  <thead>
                    <tr className="main-heading">
                      <th className="custome-checkbox start pl-30">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox11"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheckbox11"
                        ></label>
                      </th>
                      <th scope="col">Product</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Subtotal</th>
                      <th scope="col" className="end">
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems?.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox11"
                            value=""
                          />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img
                                src={`${item.catImg}?im=Resize=(150,150)`}
                                className="w-100"
                                loading="lazy"
                              />
                            </div>
                            <div className="info">
                              <h4>
                                <Link
                                  to={`/products/${item.id}`}
                                  className="transition"
                                >
                                  {item.productName}
                                </Link>
                              </h4>
                              <div className="d-flex rating">
                                <Rating
                                  value={parseFloat(item.rating)}
                                  readOnly
                                  className="ratingIcon"
                                />
                                <h6>({item.rating})</h6>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="ruppes">
                          Rs {item.price.split(".")[0]}
                        </td>
                        <td>
                          <div className="quantity">
                            <Button
                              className="text-g addQty"
                              onClick={() => {
                                setQty(qty + 1);
                                let temp = cartItems?.map((product, key) => {
                                  return key === parseInt(index)
                                    ? {
                                        ...product,
                                        quantity: item.quantity + 1,
                                      }
                                    : { ...product };
                                });
                                setCartItems(temp);
                                updateCart(temp, item.id, "plus");
                              }}
                            >
                              <KeyboardArrowUpOutlined />
                            </Button>
                            <input
                              type="number"
                              min={1}
                              onChange={(e) => setQty(e.target.value)}
                              value={item.quantity}
                            />
                            <Button
                              className="text-g lowQty"
                              onClick={() => {
                                setQty(qty - 1);
                                if (item.quantity > 1) {
                                  let temp = cartItems?.map((product, key) => {
                                    return key === parseInt(index)
                                      ? {
                                          ...product,
                                          quantity: item.quantity - 1,
                                        }
                                      : { ...product };
                                  });
                                  setCartItems(temp);
                                  updateCart(temp, item.id, "minus");
                                }
                              }}
                            >
                              <KeyboardArrowDownOutlined />
                            </Button>
                          </div>
                        </td>
                        <td className="ruppes text-g">
                          Rs
                          {(
                            parseInt(item.price.split(",").join("")) *
                            parseInt(item.quantity)
                          ).toLocaleString()}
                        </td>
                        <td className="DeleteIcon cursor">
                          <Button onClick={() => handalRemove(item.id)}>
                            <DeleteOutline />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="belowContainer">
              <hr />
              <div className="d-flex justify-content-between">
                <Link to="/">
                  <Button className="btn-green p-2">
                    <ArrowBack className="me-2" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
              <div className="coupanContainer shadow">
                <h4>Have a Apply Coupon?</h4>
                <h5>Using A Promo Code?</h5>
                <input type="text" placeholder="Enter Your Coupon" />
                <Button className="btn-green">
                  <ContentPasteOutlined /> Apply
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="shadow  sideBar">
              <div className="inner">
                <h4>Subtotal</h4>
                <h3>
                  Rs{" "}
                  {cartItems
                    ?.map(
                      (ite) =>
                        parseInt(ite.price.split(",").join("")) * ite.quantity
                    )
                    .reduce((total, value) => total + value, 0)
                    .toLocaleString()}
                </h3>
              </div>
              <div className="inner"></div>
              <div className="inner">
                <h4>Shipping</h4>
                <h3>Rs 100</h3>
              </div>
              <div className="inner"></div>
              <div className="inner">
                <h4>Estimate for</h4>
                <h3>United Kingdom</h3>
              </div>
              <div className="inner"></div>
              <div className="inner">
                <h4>Total</h4>
                <h3>
                  Rs{" "}
                  {(
                    cartItems
                      ?.map(
                        (ite) =>
                          parseInt(ite.price.split(",").join("")) * ite.quantity
                      )
                      .reduce((total, value) => total + value, 0) + 100
                  ).toLocaleString()}
                </h3>
              </div>
              <Button className="btn-green">
                Proceed To CheckOut <Logout />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
