import React from "react";
import NavBar from "../NavBar";

export default function EditCardPage({ currentDeck }) {
  const navBarProps = {
    currentPage: "Edit Card",
    pastPages: [
      {
        url: `/decks/${currentDeck.id}`,
        name: currentDeck.name,
      },
    ],
  };
  return <NavBar {...navBarProps} />;
}
