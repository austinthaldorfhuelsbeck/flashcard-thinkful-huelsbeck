import React from "react";
import { useHistory } from "react-router-dom";

export default function ViewButton({ id }) {
  const history = useHistory();
  return (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => history.push(`/decks/${id}`)}
    >
      View
    </button>
  );
}
