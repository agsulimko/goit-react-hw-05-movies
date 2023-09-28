import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MoviesDetails from "../pages/MoviesDetails";

import { Layout } from "./Layout";
import Cast from "./Cast";
import { Reviews } from "./Reviews";

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

// import { Routes, Route, Link } from "react-router-dom";
// // import Home from "path/to/pages/Home";
// // import About from "path/to/pages/About";
// // import Products from "path/to/pages/Products";
// // import NotFound from "path/to/pages/NotFound";
// // import ProductDetails from "path/to/pages/ProductDetails";

// export const App = () => {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/products">Products</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<div>Home</div>} />
//         <Route path="/about" element={<div>About</div>} />
//         <Route path="/products" element={<div>Products</div>} />
//         <Route
//           path="/products/:productId"
//           element={<div>ProductDetails</div>}
//         />
//         <Route path="*" element={<div>NotFound</div>} />
//       </Routes>
//     </div>
//   );
// };
