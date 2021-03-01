import React from "react";

export default function CancelButton({ handleCancel }) {
  return (
    <button onClick={handleCancel} className="btn btn-secondary mx-1">
      Cancel
    </button>
  );
}
