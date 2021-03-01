import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { listCards, readDeck } from "../../utils/api";
import NavBar from "../NavBar";
import DeckHeader from "./DeckHeader";
import Card from "./Card";

export default function DeckPage(props) {
  const { cards, setCards, currentDeck, setCurrentDeck } = props;
  const params = useParams();
  const [refresh, setRefresh] = useState([]);

  useEffect(() => {
    readDeck(params.deckId).then(setCurrentDeck);
  }, []);

  useEffect(() => {
    listCards(params.deckId).then(setCards);
  }, [refresh]);

  const renderCards = (cards) => {
    if (cards.length > 0) {
      return cards.map((card, key) => (
        <Card card={card} key={key} setRefresh={setRefresh} />
      ));
    }
  };

  return (
    <div className="container">
      <NavBar currentPage={currentDeck.name} />
      <DeckHeader deck={currentDeck} />
      <h2>Cards</h2>
      <div class="card my-4">
        <ul class="list-group list-group-flush">{renderCards(cards)}</ul>
      </div>
    </div>
  );
}
