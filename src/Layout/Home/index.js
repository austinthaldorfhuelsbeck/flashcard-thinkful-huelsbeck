import React, { useEffect } from "react";

import { listDecks } from "../../utils/api";
import CreateDeckButton from "./CreateDeckButton";
import RenderDecks from "./RenderDecks";

export default function Home(props) {
  const { setDecks } = props;
  useEffect(() => {
    listDecks().then(setDecks);
  }, []);

  return (
    <div className="container home">
      <CreateDeckButton />
      <RenderDecks {...props} />
    </div>
  );
}
