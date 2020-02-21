import setupGame from '../setupGame';
import fetchDeck from '../fetchDeck';
import deck from './deck.json';

jest.mock('../fetchDeck');

beforeEach(() => {
  jest.clearAllMocks();
  fetchDeck.mockResolvedValue(deck);
});

it('should fetch the deck and draw the first cards', async () => {
  const playerName = 'Annie';
  const expected = {
    player: {
      name: 'Annie',
      points: 13,
      cards: [
        {
          suit: 'SPADES',
          value: 'A',
        },
        {
          suit: 'SPADES',
          value: '2',
        },
      ],
    },
    bob: {
      name: 'Bob',
      points: 17,
      cards: [
        {
          suit: 'CLUBS',
          value: '6',
        },
        {
          suit: 'CLUBS',
          value: 'A',
        },
      ],
    },
    deck: deck.slice(4),
  };
  const actual = await setupGame(playerName);
  expect(actual).toEqual(expected);
});
