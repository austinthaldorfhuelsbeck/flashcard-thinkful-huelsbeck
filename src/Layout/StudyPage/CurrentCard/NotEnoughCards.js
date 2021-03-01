import { useParams } from "react-router-dom";
import AddCardsButton from "../../AddCardsButton";

export default function NotEnoughCards() {
  const params = useParams();

  return (
    <div>
      <h3>Not enough cards.</h3>
      <p>You need at least 3 cards to study. There are 2 cards in this deck.</p>
      <AddCardsButton id={params.deckId} />
    </div>
  );
}
