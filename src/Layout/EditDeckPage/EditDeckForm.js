import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { updateDeck, readDeck } from "../../utils/api";
import FormName from "../Form/FormName";
import FormDescription from "../Form/FormDescription";
import CancelButton from "../Form/CancelButton";
import SubmitButton from "../Form/SubmitButton";

export default function EditDeckForm({ cardId, deckId }) {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    readDeck(deckId).then(setFormData);
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
    updateDeck({ ...formData }).then(() => history.push(`/decks/${deckId}`));
  };

  const inputProps = { handleChange, formData };

  return (
    <form className="py-3" onSubmit={handleSubmit}>
      <FormName {...inputProps} />
      <FormDescription {...inputProps} />
      <CancelButton handleCancel={handleCancel} />
      <SubmitButton />
    </form>
  );
}
