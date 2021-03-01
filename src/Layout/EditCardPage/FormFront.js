import React from "react";

export default function FormFront({ handleChange, formData }) {
  return (
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
  );
}
