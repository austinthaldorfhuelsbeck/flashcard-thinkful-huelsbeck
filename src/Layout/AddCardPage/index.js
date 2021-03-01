import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { readDeck } from "../../utils/api";
import NavBar from "../NavBar";
import AddCardForm from "./AddCardForm";

export default function AddCardPage({ currentDeck, setCurrentDeck }) {
  const params = useParams();

  // makes sure the nav still works when refreshed
  // or when you get to the page from a weird place
  useEffect(() => {
    readDeck(params.deckId).then(setCurrentDeck);
  }, []);

  const navBarProps = {
    currentPage: "Add Card",
    pastPages: [
      {
        url: `/decks/${currentDeck.id}`,
        name: currentDeck.name,
      },
    ],
  };

  return (
    <div className="container edit-card">
      <NavBar {...navBarProps} />
      <h2>Add Card</h2>
      <AddCardForm {...params} />
    </div>
  );
}
