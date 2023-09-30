import React, { useState, useEffect } from "react";
import { getAllMovies } from "../api/api";
import { Link, useLocation } from "react-router-dom";
import css from "./Movies.module.css";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useSearchParams } from "react-router-dom";
const Movies = () => {
  // const { moveId } = useParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  // const [searchInput, setSearchInput] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");
  // const [searchedMovies, setSearchedMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  // const ref = useRef(query);

  const location = useLocation();
  // const params = useParams();
  // console.log(params);
  const fetchMovies = async () => {
    try {
      const { results } = await getAllMovies(query);
      //   console.log(results);
      setMovies((prevMovies) => [...results]);
    } catch (err) {
      setError(error.message);
    }
  };
  //   console.log(movies);

  // useEffect(() => {
  //   if (!ref.current) {
  //     return;
  //   } //відміняємо запит при першому рендері
  //   fetchMovies(ref.current);
  // }, [fetchMovies, ref]);

  // useEffect(() => {
  //   if (!searchQuery) {
  //     return;
  //   } //відміняємо запит при першому рендері
  //   fetchMovies(searchQuery);
  // }, [fetchMovies, searchQuery]);

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const updateQueryString = (event) => {
    const moviesIdVaiue = event.target.value.trim();
    if (moviesIdVaiue === "") {
      return setSearchParams({});
    }
    setSearchParams({ query: moviesIdVaiue });
    //   // Если в event.target.value  пустой обьект то записываем {}}
    //   // Если в event.target.value не пустой обьект то записываем (query: event.target.value)
  };
  // const visibleMovies = movies.filter((movie) => movie.includes(query));

  return (
    // <div className={css.divGoBack}>

    <div className={css.divGoBack}>
      {/* <Link to="/"> Go back</Link> */}
      <form>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            //  className="input"
            type="text"
            //  autocomplete="off"
            //  autofocus
            //  placeholder="Search images and photos"
            name="title"
            size="small"
            sx={{ m: 1, width: "35ch" }}
            style={{ backgroundColor: "white" }}
            className="form-control"
            onChange={updateQueryString}
            value={query || ""} // Устанавливаем пустую строку, если значение query равно null
            id="input-with-sx"
            label="Search movies"
            variant="outlined"
            margin="dense"
          />
          <Button onClick={() => fetchMovies()} variant="outlined">
            Search
          </Button>
        </Box>

        <Stack spacing={2} direction="row"></Stack>
      </form>

      {/* <p>Movies страница</p> */}
      <ul className={css.listMovies}>
        {movies.map((mov, index) => {
          return (
            <li key={index}>
              <Link to={`/${mov.id}`} state={location}>
                {mov.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
    // </div> state={{ from: location }} console.log(location);
  );
};

export default Movies;
