import express from 'express';

import sanitizePlayerName from './sanitizePlayerName';
import setupGame from './setupGame';
import play from './play';
import log from './log';

export default () => {
  const app = express();
  const port = 8080;

  app.get('/blackjack/play', async (request, response) => {
    try {
      const playerName = sanitizePlayerName(request.query.playerName);
      const { player, bob, deck } = await setupGame(playerName);
      const outcome = play(player, bob, deck);
      response.status(200).send(outcome);
    } catch (error) {
      log(error);
      const { message } = error;
      response.status(500).send({ message });
    }
  });

  app.listen(port, () => {
    log('Server started on port %d', port);
  });
};
