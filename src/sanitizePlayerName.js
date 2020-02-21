export default (playerName = '') => {
  const trimmed = playerName.trim();
  return (
    !trimmed || trimmed.toLocaleLowerCase() === 'bob'
      ? 'You'
      : trimmed
  );
};
