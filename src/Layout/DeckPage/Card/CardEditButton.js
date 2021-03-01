import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function CardEditButton({ id }) {
  const { url } = useRouteMatch();
  return (
    <Link to={`${url}/cards/${id}/edit`}>
      <button type="button" className="btn btn-secondary mx-2 my-3">
        Edit
      </button>
    </Link>
  );
}
