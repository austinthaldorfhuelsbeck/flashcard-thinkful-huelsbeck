import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

//TODO: elevate state of utils
import { readDeck } from "../../utils/api";
import NavBar from "../NavBar";
import EditDeckForm from "./EditDeckForm";

export default function EditDeckPage({ currentDeck, setCurrentDeck }) {
  const params = useParams();

  // makes sure the nav still works when refreshed
  // or when you get to the page from a weird place
  useEffect(() => {
    readDeck(params.deckId).then(setCurrentDeck);
  }, []);

  const navBarProps = {
    currentPage: "Edit Deck",
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
      <div className="col col-md-6 mx-auto my-4">
        <h2>Edit Deck</h2>
        <EditDeckForm {...params} />
      </div>
    </div>
  );
}
