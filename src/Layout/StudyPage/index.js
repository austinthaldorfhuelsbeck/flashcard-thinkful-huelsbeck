import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { readDeck } from "../../utils/api";
import NavBar from "../NavBar";

export default function StudyPage({ currentDeck, setCurrentDeck }) {
  const params = useParams();

  useEffect(() => {
    readDeck(params.deckId).then(setCurrentDeck);
  }, []);

  const pastPage = {
    url: `/decks/${currentDeck.id}`,
    name: currentDeck.name,
  };
  console.log(currentDeck);
  return <NavBar currentPage="Study" pastPages={[pastPage]} />;
}
