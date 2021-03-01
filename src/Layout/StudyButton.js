import React from "react";
import { Link } from "react-router-dom";

export default function StudyButton({ deck }) {
  return (
    <Link to={`/decks/${deck.id}/study`}>
      <button type="button" className="btn btn-primary mx-1">
        Study
      </button>
    </Link>
  );
}
