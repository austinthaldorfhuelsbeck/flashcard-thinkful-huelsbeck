import React from "react";
import { Link } from "react-router-dom";

export default function AddCardsButton({ id }) {
  return (
    <Link to={`/decks/${id}/cards/new`}>
      <button type="button" className="btn  btn-primary mx-1">
        <span class="oi oi-plus mr-1"></span>Add Cards
      </button>
    </Link>
  );
}
