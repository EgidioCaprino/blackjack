const shouldLog = process.env.NODE_ENV !== 'test';

export default (...messages) => {
  if (shouldLog) {
    // eslint-disable-next-line no-console
    console.log(...messages);
  }
};
