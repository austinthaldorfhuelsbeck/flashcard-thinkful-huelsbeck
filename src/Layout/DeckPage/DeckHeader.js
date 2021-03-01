import React from "react";

import DeckEditButton from "./DeckEditButton";
import StudyButton from "../StudyButton";

export default function DeckHeader({ deck }) {
  return (
    <div className="deck-header pb-4">
      <div className="row">
        <h3>{deck.name}</h3>
        {deck.description}
      </div>
      <div className="row my-3">
        <DeckEditButton />
        <StudyButton id={deck.id} />
      </div>
    </div>
  );
}
