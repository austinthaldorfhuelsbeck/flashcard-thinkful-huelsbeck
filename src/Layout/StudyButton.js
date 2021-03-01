import React from "react";
import { Link } from "react-router-dom";

export default function ViewButton({ id }) {
  return (
    <Link to={`/decks/${id}/study`}>
      <button type="button" className="btn btn-primary mx-1">
        Study
      </button>
    </Link>
  );
}