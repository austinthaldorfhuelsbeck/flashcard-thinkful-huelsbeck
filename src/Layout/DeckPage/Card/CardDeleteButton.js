import React from "react";

import { deleteCard } from "../../../utils/api";

export default function CardDeleteButton({ id, setRefresh }) {
  const handleDelete = () => {
    if (
      window.confirm("Delete this card? You will not be able to recover it.")
    ) {
      deleteCard(id).then(setRefresh);
    }
  };

  return (
    <button type="button" className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
}
