import play from '../play';

it('should provide a winner of the game', () => {
  const player = {
    name: 'Annie',
    points: 0,
    cards: [],
  };
  const bob = {
    name: 'Bob',
    points: 0,
    cards: [],
  };
  const deck = [
    {
      suit: 'SPADES',
      value: 'A',
    },
    {
      suit: 'DIAMONDS',
      value: 'J',
    },
  ];
  const expected = {
    winner: 'Annie',
    players: [
      {
        name: 'Annie',
        points: 21,
        cards: [
          {
            suit: 'SPADES',
            value: 'A',
          },
          {
            suit: 'DIAMONDS',
            value: 'J',
          },
        ],
      },
      {
        name: 'Bob',
        points: 0,
        cards: [],
      },
    ],
  };
  const actual = play(player, bob, deck);
  expect(actual).toEqual(expected);
});
