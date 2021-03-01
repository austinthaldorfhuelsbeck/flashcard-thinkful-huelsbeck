import React from "react";
import Card from "./Card";

export default function CardGroup({ cards, setRefresh }) {
  const renderCards = (cards) => {
    return (
      cards.length > 0 &&
      cards.map((card, key) => (
        <Card card={card} key={key} setRefresh={setRefresh} />
      ))
    );
  };

  return (
    <div class="card my-4">
      <ul class="list-group list-group-flush">{renderCards(cards)}</ul>
    </div>
  );
}
