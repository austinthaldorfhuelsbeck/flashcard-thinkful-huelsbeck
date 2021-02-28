import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
