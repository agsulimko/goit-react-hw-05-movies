// import React, { useState, useEffect } from "react";
import { getMoviesTrending } from "../api/api";
import { Link } from "react-router-dom";

const array = ["   a   ", "  b  ", "  c  ", "  d ", "  e  "];
const Movies = (prev) => {
  getMoviesTrending();
  // useEffect(() => { }, []);
  //   console.log(mov);
  return (
    <div>
      Movies страница
      {array.map((mov, index) => {
        return (
          <Link key={index} to={`${mov.id}`}>
            {mov.id}
          </Link>
        );
      })}
    </div>
  );
};

//
export default Movies;