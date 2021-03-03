import React from "react";
import { Link } from "react-router-dom";

export default function StudyButton({ deck }) {
  return (
    <Link to={`/decks/${deck.id}/study`}>
      <button type="button" className="btn btn-primary mx-1">
        <span class="oi oi-book mr-1"></span>Study
      </button>
    </Link>
  );
}
