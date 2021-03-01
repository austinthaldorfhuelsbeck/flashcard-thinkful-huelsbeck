import React, { useState } from "react";
import { useParams } from "react-router-dom";

import CurrentCardStudy from "./CurrentCardStudy";
import AddCardsButton from "../../AddCardsButton";

export default function CurrentCard({ cards, currentCard, setCurrentCard }) {
  const params = useParams();

  // PROPS //
  const currentCardProps = {
    cards: cards,
    currentCard: currentCard,
    setCurrentCard: setCurrentCard,
  };

  // RETURN //
  if (cards.length > 2) {
    return <CurrentCardStudy {...currentCardProps} />;
  }
  if (cards.length > 0) {
    return (
      <div>
        <h3>Not enough cards.</h3>
        <p>
          You need at least 3 cards to study. There are 2 cards in this deck.
        </p>
        <AddCardsButton id={params.deckId} />
      </div>
    );
  }
  return "Loading...";
}
