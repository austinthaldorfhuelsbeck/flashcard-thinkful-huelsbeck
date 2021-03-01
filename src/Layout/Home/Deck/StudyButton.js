import React from "react";
import { useHistory } from "react-router-dom";

export default function StudyButton({ id }) {
  const history = useHistory();
  return (
    <button
      type="button"
      className="btn btn-primary mx-2"
      onClick={() => history.push(`/deck/${id}/study`)}
    >
      Study
    </button>
  );
}
