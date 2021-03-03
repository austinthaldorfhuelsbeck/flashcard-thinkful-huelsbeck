import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import CreateDeckPage from "./CreateDeckPage";
import DeckPage from "./DeckPage";
import StudyPage from "./StudyPage";
import EditDeckPage from "./EditDeckPage";
import AddCardPage from "./AddCardPage";
import EditCardPage from "./EditCardPage";
import NotFound from "./NotFound";

export default function Layout() {
  const [decks, setDecks] = useState([]);
  const [currentDeck, setCurrentDeck] = useState({});
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(1);

  const props = {
    decks,
    setDecks,
    currentDeck,
    setCurrentDeck,
    cards,
    setCards,
    currentCard,
    setCurrentCard,
  };

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home {...props} />
        </Route>
        <Route exact path="/decks/new">
          <CreateDeckPage />
        </Route>
        <Route exact path="/decks/:deckId">
          <DeckPage {...props} />
        </Route>
        <Route path="/decks/:deckId/study">
          <StudyPage {...props} />
        </Route>
        <Route path="/decks/:deckId/edit">
          <EditDeckPage {...props} />
        </Route>
        <Route path="/decks/:deckId/cards/new">
          <AddCardPage {...props} />
        </Route>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <EditCardPage {...props} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
