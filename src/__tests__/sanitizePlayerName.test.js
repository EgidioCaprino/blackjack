import sanitizePlayerName from '../sanitizePlayerName';

it('should provide the given name when it is not Bob', () => {
  const expected = 'Annie';
  const actual = sanitizePlayerName('Annie');
  expect(actual).toBe(expected);
});

it('should provide "You" when the given name is Bob', () => {
  const expected = 'You';
  const actual = sanitizePlayerName('Bob');
  expect(actual).toBe(expected);
});

it('should provide "You" when no name is given', () => {
  const expected = 'You';
  const actual = sanitizePlayerName();
  expect(actual).toBe(expected);
});
