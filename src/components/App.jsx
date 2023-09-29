import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MoviesDetails from "../pages/MoviesDetails";

import { Layout } from "./Layout";
import Cast from "./Cast";
import Reviews from "./Reviews";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />} />
        {/* <Route path="/movies/{moveId}"></Route> */}
        {/* <Route path="movies/:moveId" element={<MoviesDetails />} /> */}
        <Route path=":moveId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>

      {/* <Route path="/movies/:moveId/cast" element={<div>Cast</div>} />
          <Route path="/movies/:moveId/reviews" element={<div>Reviews</div>} />*/}
    </Routes>
  );
};

// 0649efc971b913d6bfebf656f94b5c92
