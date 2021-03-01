import React, { useState } from "react";

import FlipButton from "./FlipButton";
import NextButton from "./NextButton";

export default function CurrentCard({ cards, currentCard, setCurrentCard }) {
  const [isCardFront, setIsCardFront] = useState(true);

  if (cards.length > 0) {
    setCurrentCard(cards[0]);
    return (
      <div class="card px-3 my-4">
        <div class="card-body">
          <div class="row my-1">
            <h4 class="card-title">
              Card {currentCard.id} of {cards.length}
            </h4>
          </div>
          <div class="row my-1">
            {isCardFront ? currentCard.front : currentCard.back}
          </div>
          <div class="row my-3">
            <FlipButton
              isCardFront={isCardFront}
              setIsCardFront={setIsCardFront}
            />
            <NextButton
              isCardFront={isCardFront}
              setCurrentCard={setCurrentCard}
            />
          </div>
        </div>
      </div>
    );
  }
  return "Loading...";
}
