import React from "react";

export default function FormName({ handleChange, formData }) {
  return (
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input
        id="name"
        className="form-control"
        type="text"
        placeholder="Deck Name"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
    </div>
  );
}
