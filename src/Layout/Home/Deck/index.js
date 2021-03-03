import React, { useEffect, useState } from "react";
import { listCards } from "../../../utils/api";

import ViewButton from "./ViewButton";
import StudyButton from "../../StudyButton";
import DeleteButton from "./DeckDeleteButton";
import DeckLength from "./DeckLength";

export default function Deck({ deck, key, setCurrentDeck }) {
  const [length, setLength] = useState(0);

  useEffect(() => {
    setLength(0);
    const abortController = new AbortController();

    async function loadCards() {
      try {
        const lengthFromDb = await listCards(deck.id, abortController.signal)
          .length;
        setLength(lengthFromDb);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Aborted", length);
        } else {
          throw err;
        }
      }
    }

    loadCards();

    return () => {
      console.log("cleanup", length);
      abortController.abort();
    };
  }, []);

  return (
    <div id={key} className="row my-4">
      <div className="card" data-aos="fade-up">
        <div className="card-body">
          <h4 className="card-title">{deck.name}</h4>
          <DeckLength length={length} />
          <h6 className="card-subtitle mb-3 text-muted">{deck.description}</h6>
          <ViewButton id={deck.id} />
          <StudyButton deck={deck} setCurrentDeck={setCurrentDeck} />
          <DeleteButton id={deck.id} />
        </div>
      </div>
    </div>
  );
}
