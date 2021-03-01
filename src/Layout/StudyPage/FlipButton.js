import React from "react";

export default function FlipButton({ isCardFront, setIsCardFront }) {
  const flipState = () => setIsCardFront(!isCardFront);

  return (
    <button
      type="button"
      className="btn btn-secondary mx-2 my-3"
      onClick={flipState}
    >
      Flip
    </button>
  );
}
