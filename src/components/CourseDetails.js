import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartState } from "../context/Context";
import { Link } from "react-router-dom";
import "./CourseDetails.css";

function CourseDetails({ prod }) {
  const [details, setDetails] = useState([]);
  const { id, name } = useParams();
  const {
    state: { products },
    dispatch,
  } = CartState();

  const cartHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: prod,
    });
  };

  useEffect(() => {
    const singleCourse = products.map((product) => {
      if (product.id === id) {
        return setDetails(product);
      }
    });
  }, [id]);

  //  console.log("id 2", id);
  //  console.log("id 2", details);

  return (
    <div className="course-details">
      <img
        src={details.image}
        alt="courseimage"
        className="course-details__image"
      />
      <div className="course-details__flex">
        <div>
          <h2>Course: {details.name}</h2>
          <h5 className="course-details__details fw-normal">
            {details.details}
          </h5>
        </div>
        <div>
          <div className="card shadow course-details__card">
            <div className="card-body">
              <h5 className="card-title">{details.name}</h5>
              <p className="card-text">Author: {details.findName}</p>
              {details.liveClass ? (
                <p>Coures type: Live class</p>
              ) : (
                <p>Coures type: Recorded class</p>
              )}
              <p>{details.details}</p>
              <Link to="/checkout">
                <button href="#" className="btn btn-primary">
                  Enroll now
                </button>
              </Link>
              <button
                href="#"
                className="btn btn-secondary ms-3"
                onClick={cartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
