import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";

export default function CreateDeckForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleNameChange = (event) => setName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const history = useHistory();

  const handleCancel = (event) => {
    event.preventDefault();
    history.push("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createDeck({ name, description }).then((deck) =>
      history.push(`/decks/${deck.id}`)
    );
  };

  return (
    <form className="py-3" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="form-control"
          type="text"
          placeholder="Deck Name"
          onChange={handleNameChange}
          value={name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="form-control"
          rows="3"
          placeholder="Brief description of the deck"
          onChange={handleDescriptionChange}
          value={description}
        />
      </div>
      <button onClick={handleCancel} className="btn btn-secondary mx-1">
        Cancel
      </button>
      <button type="submit" className="btn btn-primary mx-1">
        Submit
      </button>
    </form>
  );
}
