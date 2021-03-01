import React, { useEffect, useState } from "react";

import { listDecks } from "../../utils/api";
import CreateDeckButton from "./CreateDeckButton";
import Deck from "./Deck";

export default function Home({ decks, setDecks, setCurrentDeck }) {
  const [refresh, setRefresh] = useState([]);

  useEffect(() => {
    listDecks().then(setDecks);
  }, [refresh]);

  const renderDecks = (decks) => {
    if (decks.length > 0) {
      return decks.map((deck, key) => (
        <Deck
          deck={deck}
          key={key}
          setDecks={setDecks}
          setCurrentDeck={setCurrentDeck}
          setRefresh={setRefresh}
        />
      ));
    }
    return "Loading...";
  };

  return (
    <div className="container home">
      <CreateDeckButton />
      {renderDecks(decks)}
    </div>
  );
}
