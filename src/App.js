import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";

// Animate on scroll effects
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="app-routes">
      <Switch>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </div>
  );
}
