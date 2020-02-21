export default (player, bob) => {
  const playerWins = player.points === 21 || bob.points > 21;
  const bobWins = bob.points === 21 || player.points > 21;
  if (playerWins) {
    return { winner: player.name, players: [player, bob] };
  }
  if (bobWins) {
    return { winner: bob.name, players: [player, bob] };
  }
  return false;
};
