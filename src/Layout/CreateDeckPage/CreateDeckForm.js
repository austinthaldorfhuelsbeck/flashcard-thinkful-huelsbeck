import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { createDeck } from "../../utils/api";
import FormName from "../FormComponents/FormName";
import FormDescription from "../FormComponents/FormDescription";
import CancelButton from "../FormComponents/CancelButton";
import SubmitButton from "../FormComponents/SubmitButton";

export default function CreateDeckForm() {
  const initialFormState = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  const history = useHistory();
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handleCancel = (event) => {
    event.preventDefault();
    history.push("/");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createDeck({ ...formData }).then((deck) =>
      history.push(`/decks/${deck.id}`)
    );
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
