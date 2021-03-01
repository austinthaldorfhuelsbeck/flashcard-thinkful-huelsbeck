import React from "react";
import { Link } from "react-router-dom";

export default function ViewButton({ id }) {
  return (
    <Link to={`/decks/${id}`}>
      <button type="button" className="btn btn-secondary mx-1">
        View
      </button>
    </Link>
  );
}
