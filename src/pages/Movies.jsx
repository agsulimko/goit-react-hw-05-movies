import React, { useState, useEffect } from "react";
import { getAllMovies } from "../api/api";
import { Link } from "react-router-dom";
import css from "./Movies.module.css";
// import FormSerch from "components/FormSerch";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useSearchParams } from "react-router-dom";
const Movies = (prev) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  console.log(query);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

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
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <div className="">
      {/* <form className="form" onSubmit="{handleSubmit}"> */}
      {/* // <form className="form" onSubmit={handleSubmit}> */}
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
          onChange={(event) => setSearchParams({ query: event.target.value })}
          value={query || ""} // Устанавливаем пустую строку, если значение query равно null
          id="input-with-sx"
          label="Search movies"
          variant="outlined"
          margin="dense"
        />
      </Box>
      {/* <button onClick={() => setSearchParams({ c: "HELLO" })}>Button</button> */}
      {/* </form> */}

      {/* <FormSerch /> */}
      {/* <div className={css.homeMovies}> */}
      <p>Movies страница</p>
      <ul className={css.listMovies}>
        {movies.map((mov, index) => {
          // console.log(mov.id);
          // console.log(index);
          return (
            <li key={index}>
              <Link to={`${mov.id}`}>{mov.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Movies;
