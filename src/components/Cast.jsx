import React, { useState, useEffect } from "react";
import { getCast } from "../api/api";
import { useParams } from "react-router-dom";

const Cast = () => {
  const { moveId } = useParams();
  //   console.log("moveId=", moveId);
  const [castMovies, setCast] = useState([]);
  const [error, setError] = useState(null);

  const fetchCast = async () => {
    try {
      const { cast } = await getCast(moveId);
      console.log(cast);
      setCast((prevCast) => [...cast]);
      console.log(castMovies);
    } catch (err) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(castMovies);
  return (
    <div>
      <div>++++Cast++++</div>
      {castMovies.map((castMovie, index) => {
        if (castMovie.profile_path) {
          return (
            <div key={index}>
              <img
                className="center-block img-responsive"
                width="200px"
                // height="320px"
                src={`https://image.tmdb.org/t/p/w500/${castMovie.profile_path}`}
                alt={castMovie.name}
              />
              <p>{castMovie.name}</p>
              <p>{`Character: ${castMovie.character}`}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Cast;

// profile_path
// name
// character
