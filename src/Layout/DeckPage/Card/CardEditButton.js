import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function CardEditButton({ id }) {
  const { url } = useRouteMatch();
  return (
    <Link to={`${url}/cards/${id}/edit`}>
      <button type="button" className="btn btn-secondary mx-2 my-3">
        <span class="oi oi-pencil mr-1"></span>Edit
      </button>
    </Link>
  );
}
