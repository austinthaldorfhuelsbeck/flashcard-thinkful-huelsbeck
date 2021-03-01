import React from "react";
import { useParams } from "react-router-dom";

import NavBar from "../NavBar";
import EditCardForm from "./EditCardForm";

export default function EditCardPage({ currentDeck }) {
  const params = useParams();
  const navBarProps = {
    currentPage: `Edit Card ${params.cardId}`,
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
      <h2>Edit Card</h2>
      <EditCardForm {...params} />
    </div>
  );
}
