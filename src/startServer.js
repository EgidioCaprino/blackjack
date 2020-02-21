import express from 'express';

import setupGame from './setupGame';
import play from './play';

export default () => {
  const app = express();
  const port = 8080;

  app.get('/blackjack/play', async (request, response) => {
    const { playerName = 'You' } = request.query;
    try {
      const { player, bob, deck } = await setupGame(playerName);
      const outcome = play(player, bob, deck);
      response.status(200).send(outcome);
    } catch (error) {
      console.error(error);
      const { message } = error;
      response.status(500).send({ message });
    }
  });

  app.listen(port, () => {
    console.log('Server started on port %d', port);
  });
};
