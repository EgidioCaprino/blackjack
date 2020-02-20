import getCardValue from '../getCardValue';

it('should value 10 a figured card which is not an ace', () => {
  const expected = [10, 10, 10];
  const actual = ['J', 'Q', 'K'].map((value) => ({ value })).map(getCardValue);
  expect(actual).toEqual(expected);
});

it('should value 11 an ace', () => {
  const expected = 11;
  const actual = getCardValue({ value: 'A' });
  expect(actual).toStrictEqual(expected);
});

it('should use the numeric value for the numbered cards', () => {
  const expected = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const actual = ['2', '3', '4', '5', '6', '7', '8', '9', '10']
    .map((value) => ({ value }))
    .map(getCardValue);
  expect(actual).toEqual(expected);
});

it('should value 0 unknown cards', () => {
  const expected = 0;
  const actual = getCardValue({ value: '15' });
  expect(actual).toStrictEqual(expected);
});
