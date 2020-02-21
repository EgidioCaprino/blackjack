import getCardValue from './getCardValue';

export default (player, deck) => {
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

  return {
    player: newPlayer,
    deck: newDeck,
  };
};
