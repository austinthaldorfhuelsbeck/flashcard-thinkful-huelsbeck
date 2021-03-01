import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { updateCard, readCard } from "../../utils/api";
import FormFront from "./FormFront";
import FormBack from "./FormBack";
import CancelButton from "../CancelButton";
import SubmitButton from "../SubmitButton";

export default function EditCardForm({ cardId, deckId }) {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    readCard(cardId).then(setFormData);
  }, []);

  const history = useHistory();
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handleCancel = (event) => {
    event.preventDefault();
    history.push(`/decks/${deckId}`);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateCard({ ...formData }).then(() => history.push(`/decks/${deckId}`));
  };

  const inputProps = { handleChange, formData };

  return (
    <form className="py-3" onSubmit={handleSubmit}>
      <FormFront {...inputProps} />
      <FormBack {...inputProps} />
      <CancelButton handleCancel={handleCancel} />
      <SubmitButton />
    </form>
  );
}
