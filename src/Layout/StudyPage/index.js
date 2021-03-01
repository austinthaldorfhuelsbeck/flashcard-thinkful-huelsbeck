import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { readDeck, listCards } from "../../utils/api";
import NavBar from "../NavBar";
import CurrentCard from "./CurrentCard";

export default function StudyPage(props) {
  const params = useParams();
  const { currentDeck, setCurrentDeck } = props;
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(1);

  useEffect(() => {
    readDeck(params.deckId).then(setCurrentDeck);
  }, []);

  useEffect(() => {
    listCards(params.deckId).then(setCards);
  }, [currentDeck]);

  const navBarProps = {
    currentPage: "Study",
    pastPages: [
      {
        url: `/decks/${currentDeck.id}`,
        name: currentDeck.name,
      },
    ],
  };

  const currentCardProps = {
    cards: cards,
    currentCard: currentCard,
    setCurrentCard: setCurrentCard,
  };

  return (
    <div className="container study-page">
      <NavBar {...navBarProps} />
      <h2>Study: {currentDeck.name}</h2>
      <CurrentCard {...currentCardProps} />
    </div>
  );
}
