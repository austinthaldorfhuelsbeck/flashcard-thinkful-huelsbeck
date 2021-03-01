import React from "react";

import CardEditButton from "./CardEditButton";
import CardDeleteButton from "./CardDeleteButton";

export default function Card({ card, key }) {
  return (
    <li id={key} className="list-group-item">
      <div className="row">
        <div className="col col-6">{card.front}</div>
        <div className="col col-6">
          {card.back}
          <br />
          <CardEditButton id={card.id} />
          <CardDeleteButton id={card.id} />
        </div>
      </div>
    </li>
  );
}
