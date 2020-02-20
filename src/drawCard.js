export default (player, deck) => {
  if (!deck.length) {
    console.warn('Unable to draw a card because the deck is empty');
    return { player, deck };
  }

  const [card, ...newDeck] = deck;
  const newPlayer = {
    ...player,
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
