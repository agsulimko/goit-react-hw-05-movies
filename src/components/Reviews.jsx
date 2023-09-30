import React, { useState, useEffect } from "react";
import { getReviews } from "../api/api";
import { useParams } from "react-router-dom";
import css from "./Reviews.module.css";
const Reviews = () => {
  const { moveId } = useParams();

  const [reviewsMovies, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const fetchReviews = async () => {
    try {
      const { results } = await getReviews(moveId);

      setReviews((prevReviews) => [...results]);
    } catch (err) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (reviewsMovies.length) {
    return (
      <div>
        {/* ++++Reviews++++ */}
        {reviewsMovies.map((reviewsMovie, index) => {
          return (
            <div key={index}>
              <p>{`Author: ${reviewsMovie.author}.`}</p>
              <p>{reviewsMovie.content}</p>
            </div>
          );
        })}
      </div>
    );
  } else
    return (
      <div>
        <p className={css.ReviewsNot}>
          {" "}
          We don't have any reviews for this movie.
        </p>
      </div>
    );
};
export default Reviews;
