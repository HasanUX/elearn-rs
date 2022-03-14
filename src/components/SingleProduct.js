import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";
import { MdOutlineLiveTv, MdOutlineRecordVoiceOver } from "react-icons/md";
import "./SingleProduct.css";
import { Link } from "react-router-dom";

function SingleProduct({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const cartHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: prod,
    });
  };

  const removeHandler = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: prod,
    });
  };

  //  console.log(prod.phoneNumber);

  return (
    <div className="singleProduct">
      <Link
        to={`/course/${prod.id}/${prod.name}`}
        className="singleProduct_link"
      >
        <Card className="singleProduct__card">
          <Card.Img variant="top" src={prod.image} />
          <Card.Body>
            <h5 className="singleProduct__name">{prod.name}</h5>
            <div className="singleProduct__author text-secondary">
              {prod.findName}
            </div>
            {prod.beginner && (
              <span className="badge bg-warning text-dark singleProduct__levelBadge">
                Beginner
              </span>
            )}
            {prod.liveClass ? (
              <div className="singleProduct__liveClass">
                <MdOutlineLiveTv />
                <span> Live class </span>
              </div>
            ) : (
              <div className="singleProduct__liveClass">
                <MdOutlineRecordVoiceOver />
                <span> Recorded class</span>
              </div>
            )}
            <div className="singleProduct__rating">
              <Rating rating={prod.ratings} />
            </div>
          </Card.Body>
        </Card>
      </Link>
      <div className="singleProduct__priceBtnFlex">
        <p className="singleProduct__price">$ {prod.price}</p>

        {cart.some((p) => p.id === prod.id) ? (
          <Button
            variant="secondary"
            className="singleProduct__cartButton"
            onClick={cartHandler}
          >
            Added to cart
          </Button>
        ) : (
          <Button
            variant="primary"
            className="singleProduct__cartButton"
            onClick={cartHandler}
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
