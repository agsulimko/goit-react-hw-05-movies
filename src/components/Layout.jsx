import { NavLink, Routes, Route, Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>

        {/* <NavLink to="/movies/{moveId}">MoviesDetails</NavLink> */}
        {/* <NavLink to="/movies/:moveId">MoviesDetails</NavLink>*/}

        {/* <NavLink to="/movies/:moveId/cast">MovieDetails</NavLink>
        <NavLink to="//movies/:moveId/reviews">MovieDetails</NavLink> */}
      </ul>
      <Outlet />
    </header>
  );
};
