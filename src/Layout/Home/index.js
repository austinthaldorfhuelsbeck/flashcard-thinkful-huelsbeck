import React, { useEffect } from "react";

import { listDecks } from "../../utils/api";
import CreateDeckButton from "./CreateDeckButton";
import RenderDecks from "./RenderDecks";

export default function Home(props) {
  const { decks, setDecks } = props;

  useEffect(() => {
    setDecks([]);
    const abortController = new AbortController();

    async function loadDecks() {
      try {
        const decksFromDb = await listDecks(abortController.signal);
        setDecks(decksFromDb);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Aborted", decks);
        } else {
          throw err;
        }
      }
    }

    loadDecks();

    return () => {
      console.log("cleanup", decks);
      abortController.abort();
    };
  }, []);

  return (
    <div className="container home">
      <CreateDeckButton />
      <div className="col col-md-6 mx-auto my-4">
        <h2>Decks:</h2>
        <RenderDecks {...props} />
      </div>
    </div>
  );
}
