import React from "react";
import { Link } from "react-router-dom";

export default function CreateDeckButton({ id }) {
  return (
    <Link to={`/decks/new`}>
      <button type="button" className="btn btn-secondary">
        <span class="oi oi-plus mr-1"></span>Create Deck
      </button>
    </Link>
  );
}
