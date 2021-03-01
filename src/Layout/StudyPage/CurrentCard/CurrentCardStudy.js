import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import FlipButton from "./FlipButton";
import NextButton from "./NextButton";

export default function CurrentCardStudy(props) {
  const { cards, currentCard, setCurrentCard } = props;
  const history = useHistory();
  const card = cards[currentCard - 1];
  const [isCardFront, setIsCardFront] = useState(true);

  // HELPER FUNCTIONS //
  const flipState = () => setIsCardFront(!isCardFront);
  const handleRestart = () => {
    if (
      window.confirm(
        "Restart cards? Click 'cancel' to return to the home page."
      )
    ) {
      setCurrentCard(1);
      flipState();
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
    }
  };

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
          <FlipButton flipState={flipState} />
          <NextButton isCardFront={isCardFront} incrementCard={incrementCard} />
        </div>
      </div>
    </div>
  );
}
