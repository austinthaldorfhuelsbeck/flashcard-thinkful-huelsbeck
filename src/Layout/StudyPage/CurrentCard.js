import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import FlipButton from "./FlipButton";
import NextButton from "./NextButton";
import AddCardsButton from "../AddCardsButton";

export default function CurrentCard({ cards, currentCard, setCurrentCard }) {
  const [isCardFront, setIsCardFront] = useState(true);
  const card = cards[currentCard - 1];
  const params = useParams();
  const history = useHistory();

  // HELPER FUNCTIONS //
  const flipState = () => setIsCardFront(!isCardFront);
  const handleRestart = () => {
    if (
      window.confirm(
        "Restart cards? Click 'cancel' to return to the home page."
      )
    ) {
      setCurrentCard(1);
    } else {
      history.push("/");
    }
  };
  const incrementCard = () => {
    if (currentCard < cards.length) {
      setCurrentCard(currentCard + 1);
      flipState();
    } else {
      handleRestart();
      flipState();
    }
  };

  // PROPS //
  const flipButtonProps = {
    isCardFront: isCardFront,
    setIsCardFront: setIsCardFront,
    flipState: flipState,
  };
  const nextButtonProps = {
    isCardFront: isCardFront,
    currentCard: currentCard,
    setCurrentCard: setCurrentCard,
    incrementCard: incrementCard,
    flipState: flipState,
  };

  if (cards.length > 2) {
    return (
      <div className="card px-3 my-4">
        <div className="card-body">
          <div className="row my-1">
            <h4 className="card-title">
              Card {currentCard} of {cards.length}
            </h4>
          </div>
          <div className="row my-1">{isCardFront ? card.front : card.back}</div>
          <div className="row my-3">
            <FlipButton {...flipButtonProps} />
            <NextButton {...nextButtonProps} />
          </div>
        </div>
      </div>
    );
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
