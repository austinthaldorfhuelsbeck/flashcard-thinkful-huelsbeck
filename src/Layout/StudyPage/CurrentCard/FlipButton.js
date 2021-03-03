import React from "react";

export default function FlipButton({ flipState }) {
  return (
    <button
      type="button"
      className="btn btn-secondary mx-2 my-3"
      onClick={flipState}
    >
      <span class="oi oi-action-redo mr-1"></span>Flip
    </button>
  );
}
