import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { listCards } from "../../utils/api";
import NavBar from "../NavBar";
import DeckHeader from "./DeckHeader";
import Card from "./Card";

export default function DeckPage({ cards, setCards }) {
  const params = useParams();
  const [refresh, setRefresh] = useState([]);

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
      <NavBar />
      <DeckHeader />
      <h2>Cards</h2>
      <div class="card">
        <ul class="list-group list-group-flush">{renderCards(cards)}</ul>
      </div>
    </div>
  );
}
