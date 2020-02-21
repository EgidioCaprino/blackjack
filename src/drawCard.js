import getCardValue from './getCardValue';

const drawCard = (player, deck, count = 1) => {
  if (!deck.length) {
    throw new Error('Unable to draw a card because the deck is empty');
  }

  const [card, ...newDeck] = deck;
  const newPlayer = {
    ...player,
    points: player.points + getCardValue(card),
    cards: [
      ...player.cards,
      card,
    ],
  };

  return (
    count > 1
      ? drawCard(newPlayer, newDeck, count - 1)
      : { player: newPlayer, deck: newDeck }
  );
};

export default drawCard;
