import React from "react";
import { Button } from "react-bootstrap";
import "./Header.css";
import { MdShoppingCart, MdDelete } from "react-icons/md";

import {
  Container,
  Nav,
  Navbar,
  FormControl,
  Form,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

function Header({ prod }) {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  //  const removeHandler = () => {
  //    dispatch({
  //      type: "REMOVE_FROM_CART",
  //      payload: prod,
  //    });
  //  };

  return (
    <Navbar bg="dark" expand="lg" fixed="top" className="navbar">
      <Container fluid className="navbar__containerFLuid">
        <Link to="/" className="navbar__logoLink">
          <Navbar.Brand className="navbar__logo text-white">
            Elearn
          </Navbar.Brand>
        </Link>
        <Form className="navbar__searchFormMobileDiv align-items-center justify-content-start w-50">
          <FormControl
            type="search"
            placeholder="What do you want to learn..."
            className="navbar__searchForm m-auto"
            aria-label="Search"
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
          />
        </Form>
        <Link to="/favorites" className="navbar__cartLink">
          <div className="navbar__outSideCart">
            <div>
              <MdShoppingCart className="navbar__outSideCartIcon"></MdShoppingCart>
              <span className="navbar__outSideCartCount text-black">
                {cart.length}
              </span>
            </div>
          </div>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="navbar__searchFormDesktopDiv w-50 align-items-center justify-content-end">
            <FormControl
              type="search"
              placeholder="What do you want to learn..."
              className="navbar__searchFormDesktop m-auto"
              aria-label="Search"
              onChange={(e) =>
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                })
              }
            />
          </Form>
          <div className="navbar__cartDiv">
            <Dropdown className="navbar__cartDrowpDown">
              <Dropdown.Toggle variant="default" id="dropdown-basic">
                <div>
                  <MdShoppingCart className="navbar__cartIcon"></MdShoppingCart>
                  <span className="navbar__cartCount text-black">
                    {cart.length}
                  </span>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="text-center">
                <Link to="/favorites" className="navbar__cartLink">
                  Check favorites
                </Link>
                <div className="navbar__dropDownMenu">
                  {cart.length > 0 ? (
                    <>
                      {cart.map((prod) => (
                        <div className="navbar__dropDownList" key={prod.id}>
                          <p>{prod.name}</p>
                          <MdDelete
                            className="navbar__dropDownDeleteIcon"
                            onClick={() => {
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                              });
                            }}
                          />
                        </div>
                      ))}
                    </>
                  ) : (
                    <Link
                      to="/favorites"
                      className="navbar__cartLink p-2 mb-4 text-black rounded"
                    >
                      Cart is empty
                    </Link>
                  )}
                  {cart.length > 0 && (
                    <Button
                      variant="danger"
                      className="singleProduct__cartButton"
                      onClick={() => {
                        dispatch({
                          type: "DELETE_ALL_FROM_CART",
                          payload: prod,
                        });
                      }}
                    >
                      Delete all
                    </Button>
                  )}
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Nav
            className="navbar__menu"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/about" className="navbar__link text-white">
              About us
            </Link>
            <Link
              to="/login"
              className="navbar__link bg-primary rounded text-white"
            >
              Join for free
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
