import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import DeckPage from "./DeckPage";
import NotFound from "./NotFound";

export default function Layout() {
  const [decks, setDecks] = useState([]);

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home decks={decks} setDecks={setDecks} />
        </Route>
        <Route path="/decks/:deckId">
          <DeckPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
