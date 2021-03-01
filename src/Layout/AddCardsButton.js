import React from "react";
import { Link } from "react-router-dom";

export default function AddCardsButton({ id }) {
  return (
    <Link to={`/decks/${id}/cards/new`}>
      <button type="button" className="btn  btn-primary mx-1">
        Add Cards
      </button>
    </Link>
  );
}
