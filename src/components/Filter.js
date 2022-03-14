import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import "./Filter.css";
import { CartState } from "../context/Context";

const Filters = () => {
  const {
    productState: { sort, byLiveClass, byBeginner, byRating },
    productDispatch,
  } = CartState();

  //  console.log(sort, byLiveClass, byParkingSpace, byRating);
  // make state for rating

  return (
    <div className="filters shadow-sm">
      {/*<span className="filters__title">Filter Choices</span>*/}
      {/*<span>
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
      </span>*/}
      <span>
        <Form.Check
          inline
          label="Live class"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_LIVE_CLASS",
            })
          }
          checked={byLiveClass}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Beginner"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_BEGINNER",
            })
          }
          checked={byBeginner}
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
      <Button
        className="filter__btnClearFilters bg-dark text-white"
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        See all courses
      </Button>
    </div>
  );
};

export default Filters;
