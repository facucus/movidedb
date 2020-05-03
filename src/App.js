import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import Movie from "pages/MovieDetail";
import Nav from "components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/movie/:id">
          <Movie />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
