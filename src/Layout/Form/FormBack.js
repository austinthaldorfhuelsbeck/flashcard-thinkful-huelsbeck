import React from "react";

export default function FormBack({ handleChange, formData }) {
  return (
    <div className="form-group">
      <label htmlFor="back">Back</label>
      <textarea
        id="back"
        className="form-control"
        rows="3"
        placeholder="Back side of card"
        name="back"
        onChange={handleChange}
        value={formData.back}
      />
    </div>
  );
}
