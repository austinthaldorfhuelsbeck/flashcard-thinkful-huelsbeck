import React, { useEffect } from "react";

import { listDecks } from "../../utils/api";
import CreateDeckButton from "./CreateDeckButton";

export default function Home(props) {
  const { decks, setDecks, setCurrentDeck } = props;

  useEffect(() => {
    listDecks().then(setDecks);
  }, []);

  return (
    <div className="container home">
      <CreateDeckButton />
      <RenderDecks decks={decks} />
    </div>
  );
}
