import React, { useState, useEffect } from "react";
import { getAllMovies } from "../api/api";
import { Link } from "react-router-dom";
import css from "./Movies.module.css";
import FormSerch from "components/FormSerch";
const Movies = (prev) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  getAllMovies();
  const fetchMovies = async () => {
    try {
      const { results } = await getAllMovies();
      //   console.log(results);
      setMovies((prevMovies) => [...results]);
    } catch (err) {
      setError(error.message);
    }
  };
  //   console.log(movies);
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="">
      <FormSerch />
      {/* <div className={css.homeMovies}> */}
      <p>Movies страница</p>
      <ul className={css.listMovies}>
        {movies.map((mov, index) => {
          // console.log(mov.id);
          // console.log(index);
          return (
            <li>
              <Link key={index} to={`${mov.id}`}>
                {mov.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Movies;
