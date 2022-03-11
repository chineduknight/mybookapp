import React from "react";
import "./App.css";
import { PUBLIC_ROUTES } from "./routes";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const AppWrapper = () => {
  const routes = useRoutes(PUBLIC_ROUTES);
  return routes;
};

const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
