import drawCard from '../drawCard';

it('should remove the first card from the deck', () => {
  const deck = [
    {
      suit: 'SPADES',
      value: '2',
    },
  ];
  const player = {
    points: 0,
    cards: [],
  };
  const expected = [];
  const { deck: actual } = drawCard(player, deck);
  expect(actual).toEqual(expected);
});

it('should assign the first card to the player', () => {
  const deck = [
    {
      suit: 'SPADES',
      value: '2',
    },
  ];
  const player = {
    points: 0,
    cards: [],
  };
  const expected = [
    {
      suit: 'SPADES',
      value: '2',
    },
  ];
  const { player: { cards: actual } } = drawCard(player, deck);
  expect(actual).toEqual(expected);
});

it('should assign the points to the player', () => {
  const deck = [
    {
      suit: 'SPADES',
      value: '2',
    },
  ];
  const player = {
    points: 0,
    cards: [],
  };
  const expected = 2;
  const { player: { points: actual } } = drawCard(player, deck);
  expect(actual).toBe(expected);
});
