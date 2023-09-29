import React, { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { getMoviesTrending } from "../api/api";
const MoviesDetails = () => {
  // const params = useParams();
  const { moveId } = useParams();
  // console.log("moveId=", moveId);

  const [title, setTitle] = useState(null);
  const [poster_path, setPoster_path] = useState(null);
  const [release_date, setRelease_date] = useState(null);
  const [overview, setOverview] = useState(null);
  const [vote_average, setVote_average] = useState(null);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");

  const fetchMovies = async () => {
    try {
      const {
        poster_path,
        title,
        overview,
        release_date,
        vote_average,
        genres,
      } = await getMoviesTrending(moveId);
      setTitle(title);
      setPoster_path(poster_path);
      setRelease_date(release_date.slice(0, 4));

      setOverview(overview);
      setVote_average(Math.round(vote_average * 10));
      setGenres((prevGenres) => [...genres]);

      // console.log(poster_path);
      // console.log(title);
      // console.log(release_date);
    } catch (err) {
      setError(error.message);
    }
  };
  // console.log(movies);
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moveId]);

  return (
    <>
      <div>
        {/* Cтраница MoviesDetails : {moveId} */}

        <Link to="movies"> -Go back</Link>
        <img
          className="center-block img-responsive"
          width="240px"
          // height="320px"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          // data-reactid=".1.1.0.0.1.0.0.0"
          key="movie-poster"
        />
        <h2>{`${title}(${release_date})`}</h2>
        <p>User Score:{` ${vote_average}%`}</p>
        <h3>Overview</h3>
        <>{overview}</>
        <h3>Genres</h3>
        {genres.map((genre, index) => {
          return <p key={index}>{genre.name} </p>;
        })}

        <p>Additional information</p>
      </div>

      <ul>
        <li>
          <p>Additional information</p>
        </li>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default MoviesDetails;
