import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { Route } from "react-router-dom";
// import SavedList from "./Movies/SavedList";
// import MovieList from "./Movies/MovieList";
// import Movie from "./Movies/Movie";

import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
