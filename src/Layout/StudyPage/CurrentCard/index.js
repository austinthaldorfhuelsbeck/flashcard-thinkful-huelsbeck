import React from "react";

import CurrentCardStudy from "./CurrentCardStudy";
import NotEnoughCards from "./NotEnoughCards";

export default function CurrentCard(props) {
  const { cards } = props;
  if (cards.length > 2) {
    return <CurrentCardStudy {...props} />;
  }
  if (cards.length > 0) {
    return <NotEnoughCards />;
  }
  return "Loading...";
}
