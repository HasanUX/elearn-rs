import React from "react";
import { MdDelete } from "react-icons/md";
import { Container, ListGroup } from "react-bootstrap";
import { CartState } from "../context/Context";
import "./Favorites.css";

function favorites({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Container className="favorite__container">
      <div className="favorite">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item className="favorite__listGroupItem">
              <span className="favorite__listGroupItemName">{prod.name}</span>
              <MdDelete
                className="favorite__DeleteIcon"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  });
                }}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
}

export default favorites;
