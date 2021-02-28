import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api";

import CreateDeck from "./CreateDeck";
import DeckCard from "./DeckCard";

export default function Home() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    listDecks().then(setDecks);
  }, []);

  const renderDecks = (decks) => {
    if (decks.length > 0) {
      return decks.map((deck, key) => <DeckCard deck={deck} key={key} />);
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
