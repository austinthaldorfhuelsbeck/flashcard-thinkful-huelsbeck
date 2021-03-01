import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { listCards, readDeck } from "../../utils/api";
import NavBar from "../NavBar";
import DeckHeader from "./DeckHeader";
import CardGroup from "./CardGroup";

export default function DeckPage(props) {
  const { cards, setCards, currentDeck, setCurrentDeck } = props;
  const params = useParams();

  useEffect(() => {
    readDeck(params.deckId).then(setCurrentDeck);
  }, []);

  useEffect(() => {
    listCards(params.deckId).then(setCards);
  }, []);

  return (
    <div className="container deck-page">
      <NavBar currentPage={currentDeck.name} />
      <DeckHeader deck={currentDeck} />
      <h2>Cards</h2>
      <CardGroup cards={cards} />
    </div>
  );
}
