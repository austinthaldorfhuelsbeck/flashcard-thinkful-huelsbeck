import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function DeckEditButton() {
  const { url } = useRouteMatch();
  return (
    <Link to={`${url}/edit`}>
      <button type="button" className="btn btn-secondary mx-1">
        Edit
      </button>
    </Link>
  );
}
