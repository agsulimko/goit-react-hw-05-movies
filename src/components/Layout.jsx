// import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import css from "./Layout.module.css";

import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <header>
        <ul className={css.listLayout}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>

      <main>
        <Suspense fallback={<div>Laoding...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
