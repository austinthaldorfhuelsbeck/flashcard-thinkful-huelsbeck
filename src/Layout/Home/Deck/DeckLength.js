import React from "react";

export default function DeckLength({ length }) {
  return (
    length > 0 && (
      <p>
        <em>({length} cards)</em>
      </p>
    )
  );
}
