// export const Reviews = () => {
//   return <div>++++Reviews++++</div>;
// };
import React, { useState, useEffect } from "react";
import { getReviews } from "../api/api";
import { useParams } from "react-router-dom";
// import { Notify } from "notiflix/build/notiflix-notify-aio";
const Reviews = () => {
  const { moveId } = useParams();
  console.log("moveId=", moveId);
  const [reviewsMovies, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const fetchReviews = async () => {
    try {
      const { results } = await getReviews(moveId);
      console.log(results);
      // if (!results.length) {
      //   Notify.failure(
      //     "Sorry, there are no images matching your search query. Please try again."
      //   );
      //   return;
      // }
      setReviews((prevReviews) => [...results]);
      console.log(reviewsMovies);
    } catch (err) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(reviewsMovies);
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
        <p> We don't have any reviews for this movie.</p>
      </div>
    );
};
export default Reviews;
