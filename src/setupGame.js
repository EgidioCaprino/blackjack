import fetchDeck from './fetchDeck';
import drawCard from './drawCard';

export default async (playerName) => {
  const player = {
    name: playerName,
    points: 0,
    cards: [],
  };
  const bob = {
    name: 'Bob',
    points: 0,
    cards: [],
  };
  const wholeDeck = await fetchDeck();
  const playerDrawResult = drawCard(player, wholeDeck, 2);
  const bobDrawResult = drawCard(bob, playerDrawResult.deck, 2);
  return {
    player: playerDrawResult.player,
    bob: bobDrawResult.player,
    deck: bobDrawResult.deck,
  };
};
