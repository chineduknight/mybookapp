import React from "react";
import { PUBLIC_PATHS } from "./constants";
import Home from "../pages/Main";
import Search from "../pages/Search";

const { HOME, SEARCH } = PUBLIC_PATHS;

export const PUBLIC_ROUTES = [
  { path: SEARCH, element: <Search /> },
  { path: HOME, element: <Home /> },
  { path: "*", element: <div>Page not found</div> },
];
