import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { getAllMoviesTrending } from "../api/api";
import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  // console.log("moveId=", moveId);

  const fetchMovies = async () => {
    try {
      const { results } = await getAllMoviesTrending();
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
  // console.log(movies);
  // const params = useParams();
  // console.log(params);

  return (
    <div className={css.homeMovies}>
      <h1>Trending today</h1>
      {movies.map((mov, index) => {
        // console.log(mov.id);
        // console.log(index);
        return (
          <Link key={index} to={`${mov.id}`}>
            {mov.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
