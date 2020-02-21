import fetch from 'node-fetch';

export default async () => {
  const response = await fetch('https://teston-backend-case.herokuapp.com/shuffle');
  const deck = await response.json();
  if (deck.length !== 52) {
    throw new Error(`Invalid deck received: there are ${deck.length} cards`);
  }
  return deck;
};
