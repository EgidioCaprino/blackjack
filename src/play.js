import getGameOutcome from './getGameOutcome';
import drawCard from './drawCard';

const play = (player, bob, deck) => {
  const outcome = getGameOutcome(player, bob);
  if (outcome) {
    return outcome;
  }
  if (player.points < 17) {
    const result = drawCard(player, deck);
    return play(result.player, bob, result.deck);
  }
  const result = drawCard(bob, deck);
  return play(play, result.player, result.deck);
};

export default play;
