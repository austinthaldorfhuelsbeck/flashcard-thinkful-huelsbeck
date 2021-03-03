import React from "react";
import { useHistory } from "react-router-dom";

import { deleteDeck } from "../../../utils/api";

export default function DeleteButton({ id }) {
  const history = useHistory();

  const handleDelete = () => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(id).then(history.go(0));
    }
  };

  return (
    <button type="button" className="btn btn-danger" onClick={handleDelete}>
      <span class="oi oi-trash"></span>
    </button>
  );
}
