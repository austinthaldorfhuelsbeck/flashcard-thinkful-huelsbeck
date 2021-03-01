import React from "react";

export default function FormDescription({ handleChange, formData }) {
  return (
    <div className="form-group">
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        className="form-control"
        rows="3"
        placeholder="Brief description of the deck"
        name="description"
        onChange={handleChange}
        value={formData.description}
      />
    </div>
  );
}
