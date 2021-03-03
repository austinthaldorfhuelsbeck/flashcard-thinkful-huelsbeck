import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../../utils/api";

export default function CardDeleteButton({ id }) {
  const history = useHistory();

  const handleDelete = () => {
    if (
      window.confirm("Delete this card? You will not be able to recover it.")
    ) {
      deleteCard(id).then(history.go(0));
    }
  };

  return (
    <button type="button" className="btn btn-danger" onClick={handleDelete}>
      <span class="oi oi-trash"></span>
    </button>
  );
}
