import React from "react";

export default function NextButton({ isCardFront, incrementCard }) {
  return (
    !isCardFront && (
      <button
        type="button"
        className="btn btn-primary mx-2 my-3"
        onClick={incrementCard}
      >
        <span class="oi oi-arrow-right mr-1"></span>Next
      </button>
    )
  );
}
