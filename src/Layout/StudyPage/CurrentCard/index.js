import React from "react";

import CurrentCardStudy from "./CurrentCardStudy";
import NotEnoughCards from "./NotEnoughCards";

export default function CurrentCard({ cards, currentCard, setCurrentCard }) {
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
    return <NotEnoughCards />;
  }
  return "Loading...";
}
