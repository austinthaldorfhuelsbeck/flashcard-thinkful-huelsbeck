import React from "react";

import DeckEditButton from "./DeckEditButton";
import StudyButton from "../StudyButton";

export default function DeckHeader({ deck }) {
  return (
    <div className="deck-header pb-4">
      <h3>{deck.name}</h3>
      <p>{deck.description}</p>
      <div className="my-3">
        <DeckEditButton />
        <StudyButton deck={deck} />
      </div>
    </div>
  );
}
