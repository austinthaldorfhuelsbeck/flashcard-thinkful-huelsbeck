import React from "react";
import NavBar from "../NavBar";
import AddCardForm from "./AddCardForm";

export default function AddCardPage({ currentDeck }) {
  const navBarProps = {
    currentPage: "Add Card",
    pastPages: [
      {
        url: `/decks/${currentDeck.id}`,
        name: currentDeck.name,
      },
    ],
  };
  return <NavBar {...navBarProps} />;
}
