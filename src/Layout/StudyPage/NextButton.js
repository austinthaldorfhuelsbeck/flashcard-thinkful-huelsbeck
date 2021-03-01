import React from "react";

export default function NextButton({ isCardFront, setCurrentCard }) {
  return (
    !isCardFront && (
      <button type="button" className="btn btn-primary mx-2 my-3">
        Next
      </button>
    )
  );
}
