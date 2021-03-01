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

  const studyPageProps = {
    currentDeck: currentDeck,
    setCurrentDeck: setCurrentDeck,
    cards: cards,
    setCards: setCards,
    currentCard: currentCard,
    setCurrentCard: setCurrentCard,
  };

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home {...homeProps} />
        </Route>
        <Route exact path="/decks/new">
          <CreateDeckPage />
        </Route>
        <Route exact path="/decks/:deckId">
          <DeckPage {...deckPageProps} />
        </Route>
        <Route path="/decks/:deckId/study">
          <StudyPage {...studyPageProps} />
        </Route>
        <Route path="/decks/:deckId/edit">
          <EditDeckPage currentDeck={currentDeck} />
        </Route>
        <Route path="/decks/:deckId/cards/new">
          <AddCardPage currentDeck={currentDeck} />
        </Route>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <EditCardPage currentDeck={currentDeck} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
