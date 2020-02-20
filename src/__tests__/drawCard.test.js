import drawCard from '../drawCard';
import deck from './deck.json';

it('should remove the first card from the deck', () => {
  const [, ...expected] = deck;
  const { deck: actual } = drawCard({ cards: [] }, deck);
  expect(actual).toEqual(expected);
});

it('should assign the first card to the player', () => {
  const [card] = deck;
  const expected = { cards: [card] };
  const { player: actual } = drawCard({ cards: [] }, deck);
  expect(actual).toEqual(expected);
});
