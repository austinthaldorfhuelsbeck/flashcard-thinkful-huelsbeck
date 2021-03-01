import React, { useEffect } from "react";

import { listDecks } from "../../utils/api";
import CreateDeckButton from "./CreateDeckButton";
import Deck from "./Deck";

export default function Home(props) {
  const { decks, setDecks, setCurrentDeck } = props;

  useEffect(() => {
    listDecks().then(setDecks);
  }, []);

  const renderDecks = (decks) => {
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
  };

  return (
    <div className="container home">
      <CreateDeckButton />
      {renderDecks(decks)}
    </div>
  );
}
