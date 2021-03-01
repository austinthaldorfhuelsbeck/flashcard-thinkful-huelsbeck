import React from "react";

import FlipButton from "./FlipButton";
import NextButton from "./NextButton";

export default function CurrentCard({ cards, currentCard, setCurrentCard }) {
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
          <div class="row my-1">{currentCard.front}</div>
          <div class="row my-3">
            <FlipButton />
            <NextButton />
          </div>
        </div>
      </div>
    );
  }
  return "Loading...";
}
