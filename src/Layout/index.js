import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import DeckPage from "./DeckPage";
import StudyPage from "./StudyPage";
import NotFound from "./NotFound";

export default function Layout() {
  const [decks, setDecks] = useState([]);
  const [currentDeck, setCurrentDeck] = useState({});
  const [cards, setCards] = useState([]);

  const homeProps = {
    decks: decks,
    setDecks: setDecks,
    setCurrentDeck: setCurrentDeck,
  };

  const deckPageProps = {
    cards: cards,
    setCards: setCards,
    currentDeck: currentDeck,
    setCurrentDeck: setCurrentDeck,
  };

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home {...homeProps} />
        </Route>
        <Route exact path="/decks/:deckId">
          <DeckPage {...deckPageProps} />
        </Route>
        <Route path="/decks/:deckId/study">
          <StudyPage
            currentDeck={currentDeck}
            setCurrentDeck={setCurrentDeck}
          />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
