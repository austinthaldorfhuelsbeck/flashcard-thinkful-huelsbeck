import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { updateCard, readCard } from "../../utils/api";

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

  return (
    <form className="py-3" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="front">Front</label>
        <textarea
          id="front"
          className="form-control"
          rows="3"
          placeholder="...loading"
          name="front"
          onChange={handleChange}
          value={formData.front}
        />
      </div>
      <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea
          id="back"
          className="form-control"
          rows="3"
          placeholder="...loading"
          name="back"
          onChange={handleChange}
          value={formData.back}
        />
      </div>
    </form>
  );
}
