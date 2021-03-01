import React, { useEffect, useState } from "react";

import { listDecks } from "../../utils/api";
import CreateDeck from "./CreateDeck";
import Deck from "./Deck";

export default function Home({ decks, setDecks }) {
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
          setRefresh={setRefresh}
        />
      ));
    }
    return "Loading...";
  };

  return (
    <div className="container home">
      <CreateDeck />
      {renderDecks(decks)}
    </div>
  );
}
