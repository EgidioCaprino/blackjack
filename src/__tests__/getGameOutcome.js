import getGameOutcome from '../getGameOutcome';

it('should provide the winner whan a player gets to 21 points', () => {
  const player = {
    name: 'Annie',
    points: 21,
    cards: [
      {
        suit: 'SPADES',
        value: 'A',
      },
      {
        suit: 'SPADES',
        value: '10',
      },
    ],
  };
  const bob = {
    name: 'Bob',
    points: 20,
    cards: [
      {
        suit: 'HEARTS',
        value: '10',
      },
      {
        suit: 'DIAMONDS',
        value: '10',
      },
    ],
  };
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
            suit: 'SPADES',
            value: '10',
          },
        ],
      },
      {
        name: 'Bob',
        points: 20,
        cards: [
          {
            suit: 'HEARTS',
            value: '10',
          },
          {
            suit: 'DIAMONDS',
            value: '10',
          },
        ],
      },
    ],
  };
  const actual = getGameOutcome(player, bob);
  expect(actual).toEqual(expected);
});

it('should provide false when the game is not over yet', () => {
  const player = {
    name: 'Annie',
    points: 11,
    cards: [
      {
        suit: 'SPADES',
        value: 'A',
      },
    ],
  };
  const bob = {
    name: 'Bob',
    points: 10,
    cards: [
      {
        suit: 'HEARTS',
        value: '10',
      },
    ],
  };
  const expected = false;
  const actual = getGameOutcome(player, bob);
  expect(actual).toBe(expected);
});
