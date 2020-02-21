import fetch from 'node-fetch';

import fetchDeck from '../fetchDeck';
import deck from './deck.json';

jest.mock('node-fetch');

beforeEach(() => {
  fetch.mockResolvedValue({
    json: () => Promise.resolve(deck),
  });
});

it('should call the endpoint that provides the deck', async () => {
  await fetchDeck();
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('https://teston-backend-case.herokuapp.com/shuffle');
});

it('should provide an array of 52 cards', async () => {
  const actual = await fetchDeck();
  expect(Array.isArray(actual)).toBe(true);
  expect(actual).toHaveLength(52);
});

it('should throw an error when receiving an invalid deck', async () => {
  fetch.mockResolvedValue([]);
  await expect(fetchDeck()).rejects.toThrow();
});
