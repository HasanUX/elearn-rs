import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filter";

function Home() {
  const {
    state: { products },
    productState: {
      sort,
      byHomeDelivery,
      byParkingSpace,
      byRating,
      searchQuery,
    },
  } = CartState();

  //  const cartHandler = () => {
  //    dispatch({
  //      type: "ADD_TO_CART",
  //      cart: cart,
  //    });
  //  };

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.follower - b.follower : b.follower - a.follower
      );
    }

    if (byHomeDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.homeDelivery);
    }

    if (byParkingSpace) {
      sortedProducts = sortedProducts.filter((prod) => prod.parkingSpace);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <Container fluid className="home__productContainer">
      <Row className="home__row">
        <Col xs={12} md={3} className="home__col">
          <Filters />
        </Col>
        {transformProducts().map((prod) => (
          <Col xs={4} md={3} className="home__col" key={prod.id}>
            <SingleProduct prod={prod} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
