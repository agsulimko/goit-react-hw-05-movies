import React, { useState, useEffect } from "react";
import { getAllMoviesTrending } from "../api/api";
import { Link, useLocation } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const { results } = await getAllMoviesTrending();

      setMovies((prevMovies) => [...results]);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.homeMovies}>
      <h1>Trending today</h1>
      {movies.map((mov, index) => {
        return (
          <Link key={index} to={`${mov.id}`} state={{ from: location }}>
            {mov.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
