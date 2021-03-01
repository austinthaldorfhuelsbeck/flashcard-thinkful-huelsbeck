import React from "react";

import { deleteDeck } from "../../../utils/api";

export default function DeleteButton({ id, setRefresh }) {
  const handleDelete = () => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(id).then(setRefresh);
    }
  };

  return (
    <button type="button" className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
}
