import React, { useEffect, useState } from "react";
import { listCards } from "../../../utils/api";

import ViewButton from "./ViewButton";
import StudyButton from "../../StudyButton";
import DeleteButton from "./DeckDeleteButton";

export default function Deck({ deck, key, setRefresh, setCurrentDeck }) {
  const [deckLength, setDeckLength] = useState(0);

  useEffect(() => {
    listCards(deck.id)
      .then((response) => response.length)
      .then(setDeckLength);
  }, []);

  const renderLength = (length) => {
    if (length > 0) {
      return (
        <p>
          <em>({length} cards)</em>
        </p>
      );
    }
    return <p></p>;
  };

  return (
    <div id={key} className="row my-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{deck.name}</h4>
          {renderLength(deckLength)}
          <h6 className="card-subtitle mb-2 text-muted">{deck.description}</h6>
          <ViewButton id={deck.id} />
          <StudyButton deck={deck} setCurrentDeck={setCurrentDeck} />
          <DeleteButton id={deck.id} setRefresh={setRefresh} />
        </div>
      </div>
    </div>
  );
}
