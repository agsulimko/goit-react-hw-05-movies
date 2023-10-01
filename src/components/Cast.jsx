import React, { useState, useEffect } from "react";
import { getCast } from "../api/api";
import { useParams } from "react-router-dom";
import css from "./Cast.module.css";
// import image from "../helper/placeholder_image_new1.png";
const Cast = () => {
  const { movieId } = useParams();
  //   console.log("moveId=", moveId);
  const [castMovies, setCast] = useState([]);

  const fetchCast = async () => {
    try {
      const { cast } = await getCast(movieId);
      // console.log(cast);
      setCast((prevCast) => [...cast]);
      // console.log(castMovies);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.divCast}>
      {/* <div>++++Cast++++</div> */}
      {castMovies.map((castMovie, index) => {
        if (castMovie.profile_path) {
          return (
            <div className={css.cardCast} key={index}>
              <img
                className="center-block img-responsive"
                width="150px"
                // height="320px"
                src={`https://image.tmdb.org/t/p/w500/${castMovie.profile_path}`}
                alt={castMovie.name}
              />
              <p className={css.text}>{castMovie.name}</p>
              <p className={css.text}>{`Character: ${castMovie.character}`}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Cast;

// profile_path
// name
// character