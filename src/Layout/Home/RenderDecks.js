import React from "react";

import Deck from "./Deck";

export default function RenderDecks({ decks }) {
  if (decks.length > 0) {
    return decks.map((deck, key) => (
      <Deck
        deck={deck}
        key={key}
        setDecks={setDecks}
        setCurrentDeck={setCurrentDeck}
      />
    ));
  }
  return "Loading...";
}
