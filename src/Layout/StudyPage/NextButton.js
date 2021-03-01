import React from "react";

export default function NextButton({
  isCardFront,
  currentCard,
  setCurrentCard,
  incrementCard,
}) {
  return (
    !isCardFront && (
      <button
        type="button"
        className="btn btn-primary mx-2 my-3"
        onClick={incrementCard}
      >
        Next
      </button>
    )
  );
}
