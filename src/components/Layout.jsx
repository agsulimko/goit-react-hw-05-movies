// import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import styled from "styled-components";
import React from "react";
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

const Layout = () => {
  return (
    <>
      <header>
        <ul className={css.listLayout}>
          <li>
            <StyledLink
              // activeClassName={css.activeClassName}
              // exact
              // className={css.styledLink}
              // activeClassName={css.active}
              to="/"
            >
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink
              // activeClassName={css.activeClassName}
              // className={css.styledLink}
              // activeClassName={css.active}
              to="/movies"
            >
              Movies
            </StyledLink>
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
export default Layout;
