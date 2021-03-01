import React, { useState } from "react";

import FlipButton from "./FlipButton";
import NextButton from "./NextButton";

export default function CurrentCard({ cards, currentCard, setCurrentCard }) {
  const [isCardFront, setIsCardFront] = useState(true);
  const card = cards[currentCard];

  const flipState = () => setIsCardFront(!isCardFront);
  const handleRestart = () => {
    if (
      window.confirm(
        "Restart cards? Click 'cancel' to return to the home page."
      )
    ) {
      setCurrentCard(0);
    }
  };
  const incrementCard = () => {
    if (card.id < cards.length) {
      setCurrentCard(currentCard + 1);
      flipState();
    } else {
      handleRestart();
      flipState();
    }
  };

  if (cards.length > 0) {
    return (
      <div class="card px-3 my-4">
        <div class="card-body">
          <div class="row my-1">
            <h4 class="card-title">
              Card {currentCard + 1} of {cards.length}
            </h4>
          </div>
          <div class="row my-1">{isCardFront ? card.front : card.back}</div>
          <div class="row my-3">
            <FlipButton
              isCardFront={isCardFront}
              setIsCardFront={setIsCardFront}
              flipState={flipState}
            />
            <NextButton
              isCardFront={isCardFront}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
              incrementCard={incrementCard}
              flipState={flipState}
            />
          </div>
        </div>
      </div>
    );
  }
  return "Loading...";
}
