import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import "./Filter.css";
import { CartState } from "../context/Context";

const Filters = () => {
  const {
    productState: {
      sort,
      byHomeDelivery,
      byParkingSpace,
      byRating,
      searchQuery,
    },
    productDispatch,
  } = CartState();

  console.log(sort, byHomeDelivery, byParkingSpace, byRating);
  // make state for rating

  return (
    <div className="filters">
      {/*<span className="filters__title">Filter Choices</span>*/}
      <span>
        <Form.Check
          inline
          label="Paid"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_FOLLOWERS",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Free"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_FOLLOWERS",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Live class"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byHomeDelivery}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Certification program"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_PARKING_SPACE",
            })
          }
          checked={byParkingSpace}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      {/*<Button
        className="filter__btnClearFilters"
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>*/}
    </div>
  );
};

export default Filters;
