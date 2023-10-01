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
  const location = useLocation();

  const [movies, setMovies] = useState([]);

  // const [searchInput, setSearchInput] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");
  // const [searchedMovies, setSearchedMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get("query") ?? "";

  // const ref = useRef(query);

  // const params = useParams();
  // console.log(params);
  const fetchMovies = async () => {
    try {
      const { results } = await getAllMovies(query);

      setMovies((prevMovies) => [...results]);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputQuery = (event) => {
    const textInput = event.target.value.trim().toLowerCase();
    if (textInput) {
      setSearchQuery({ query: textInput });
      setInputValue(textInput);
    } else {
      setSearchQuery({});
      setInputValue("");
    }
  };
  //   // Если в event.target.value  пустой обьект то записываем {}}
  //   // Если в event.target.value не пустой обьект то записываем (query: event.target.value)

  // Вызывается при отправке формы

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      alert("Enter your request");

      return;
    }
    fetchMovies();
    setInputValue("");
  };

  console.log(location);
  return (
    // <div className={css.divGoBack}>

    <div className={css.divGoBack}>
      {/* <Link to="/"> Go back</Link> */}
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            // className="input"
            type="text"
            //  autocomplete="off"
            //  autofocus
            //  placeholder="Search images and photos"
            name="title"
            size="small"
            sx={{ m: 1, width: "35ch" }}
            style={{ backgroundColor: "rgb(212, 242, 232)" }}
            className="form-control"
            onChange={handleInputQuery}
            value={query || ""}
            // Устанавливаем пустую строку, если значение query равно null
            id="input-with-sx"
            label="Search movies"
            variant="outlined"
            margin="dense"
          />
          <Button type="submit" variant="outlined">
            Search
          </Button>
        </Box>

        <Stack spacing={2} direction="row"></Stack>
      </form>

      <ul className={css.listMovies}>
        {movies.map((mov, index) => {
          return (
            <li key={index}>
              <Link to={`/${mov.id}`} state={{ from: location }}>
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
