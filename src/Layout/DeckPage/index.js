import React, { useEffect, useState } from "react";

import { listCards } from "../../utils/api";
import NavBar from "../NavBar";
import DeckHeader from "./DeckHeader";
import Card from "./Card";

export default function DeckPage({ id, cards, setCards }) {
  const [refresh, setRefresh] = useState([]);

  useEffect(() => {
    listCards().then(setCards);
  }, [refresh]);

  const renderCards = (cards) => {
    if (cards.length > 0) {
      return cards.map((card, key) => (
        <Card
          card={card}
          key={key}
          setCards={setCards}
          setRefresh={setRefresh}
        />
      ));
    }
  };

  return (
    <div className="container">
      <NavBar />
      <DeckHeader />
      <h2>Cards</h2>
      {renderCards(cards)}
    </div>
  );
}
