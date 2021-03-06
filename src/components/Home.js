import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filter";

function Home() {
  const {
    state: { products },
    productState: { sort, byLiveClass, byBeginner, byRating, searchQuery },
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

    if (byLiveClass) {
      sortedProducts = sortedProducts.filter((prod) => prod.liveClass);
    }

    if (byBeginner) {
      sortedProducts = sortedProducts.filter((prod) => prod.beginner);
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
        <div className="home__title text-center">
          <h1 className="home__headTitle">Best courses</h1>
        </div>

        <Col xs={12} md={12} className="home__col">
          <Filters />
        </Col>
        {transformProducts().map((prod) => (
          <Col xs={6} md={3} className="home__col" key={prod.id}>
            <SingleProduct prod={prod} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
