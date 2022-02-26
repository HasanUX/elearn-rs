import { Card, Button, Stack } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";
import {
  MdPhoneInTalk,
  MdLocationPin,
  MdDeliveryDining,
  MdLocalParking,
} from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";

import "./SingleProduct.css";
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
      <Card className="singleProduct__card">
        <Card.Img variant="top" src={prod.image} />
        <Card.Body>
          <Card.Title className="singleProduct__name">{prod.name}</Card.Title>
          <Card.Title className="singleProduct__type">
            Type: {prod.suffix}
          </Card.Title>
          <Card.Text className="singleProduct__contact">
            <MdPhoneInTalk className="singleProduct__contactIcon" />
            <span className="singleProduct__contactNum">{prod.contact} </span>
          </Card.Text>
          <p className="singleProduct__followerNum">$ {prod.follower}.00</p>

          <Stack direction="horizontal" gap={2}>
            <Card.Text className="singleProduct__address">
              <MdLocationPin className="singleProduct__addressIcon" />
              <span className="singleProduct__addressText">{prod.address}</span>
            </Card.Text>
          </Stack>
          {prod.homeDelivery ? (
            <div className="mt-2">
              <MdDeliveryDining />
              <span> Home delivery available</span>
            </div>
          ) : (
            <div className="mt-2">
              <CgUnavailable />
              <span> No home delivery</span>
            </div>
          )}

          {prod.parkingSpace ? (
            <div className="mt-3">
              <MdLocalParking />
              <span> Parking available</span>
            </div>
          ) : (
            <div className="mt-3">
              <MdLocalParking />
              <span> No parking space</span>
            </div>
          )}
          <div className="singleProduct__rating">
            <Rating rating={prod.ratings} />
          </div>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              className="singleProduct__cartButton"
              onClick={removeHandler}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              variant={prod.inStock ? "primary" : "warning"}
              disabled={!prod.inStock}
              className="singleProduct__cartButton"
              onClick={cartHandler}
            >
              {prod.inStock ? "Add to cart" : "Closed"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleProduct;
