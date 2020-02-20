export default ({ value }) => {
  if (['J', 'Q', 'K'].includes(value)) {
    return 10;
  }
  if (value === 'A') {
    return 11;
  }
  if (!Number.isNaN(value)) {
    const numericValue = parseInt(value, 10);
    if (numericValue >= 2 && numericValue <= 10) {
      return numericValue;
    }
  }
  console.warn('Invalid card', value);
  return 0;
};
