import fetch from 'node-fetch';

export default async () => {
  const response = await fetch('https://teston-backend-case.herokuapp.com/shuffle');
  return response.json();
};
