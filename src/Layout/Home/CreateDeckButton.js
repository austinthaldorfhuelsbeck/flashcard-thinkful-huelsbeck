import React from "react";
import { Link } from "react-router-dom";

export default function ViewButton({ id }) {
  return (
    <Link to={`/decks/new`}>
      <button type="button" className="btn btn-secondary">
        Create Deck
      </button>
    </Link>
  );
}
