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

it('should throw an error when the deck is empty', () => {
  const deck = [];
  const player = {
    points: 0,
    cards: [],
  };
  expect(() => drawCard(player, deck)).toThrow();
});

it('should be able to draw more than one card', () => {
  const deck = [
    {
      suit: 'SPADES',
      value: '2',
    },
    {
      suit: 'CLUBS',
      value: '6',
    },
  ];
  const player = {
    points: 0,
    cards: [],
  };
  const expected = {
    player: {
      points: 8,
      cards: [
        {
          suit: 'SPADES',
          value: '2',
        },
        {
          suit: 'CLUBS',
          value: '6',
        },
      ],
    },
    deck: [],
  };
  const actual = drawCard(player, deck, 2);
  expect(actual).toEqual(expected);
});
