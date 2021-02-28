import React from "react";
import { useHistory } from "react-router-dom";

export default function CreateDeck() {
  const history = useHistory();
  return (
    <button
      type="button"
      class="btn btn-secondary"
      onClick={() => history.push("/decks/new")}
    >
      Create Deck
    </button>
  );
}
