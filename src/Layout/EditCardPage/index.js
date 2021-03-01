import React from "react";
import { useParams } from "react-router-dom";

import NavBar from "../NavBar";

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

  return <NavBar {...navBarProps} />;
}
