import React from "react";
import NavBar from "../NavBar";

export default function EditDeckPage({ currentDeck }) {
  const navBarProps = {
    currentPage: "Edit Deck",
    pastPages: [
      {
        url: `/decks/${currentDeck.id}`,
        name: currentDeck.name,
      },
    ],
  };
  return <NavBar {...navBarProps} />;
}
