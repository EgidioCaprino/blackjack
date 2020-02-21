import express from 'express';

import startServer from '../startServer';
import setupGame from '../setupGame';
import play from '../play';

jest.mock('express');
jest.mock('../setupGame');
jest.mock('../play');

const mockGet = jest.fn();
const mockListen = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  express.mockReturnValue({
    get: mockGet,
    listen: mockListen,
  });
  setupGame.mockResolvedValue({});
});

it('should listen to the /blackjack/play endpoint', () => {
  startServer();
  expect(mockGet).toHaveBeenCalledTimes(1);
  expect(mockGet).toHaveBeenCalledWith('/blackjack/play', expect.any(Function));
});

it('should listen on port 8080', () => {
  startServer();
  expect(mockListen).toHaveBeenCalledTimes(1);
  expect(mockListen).toHaveBeenCalledWith(8080, expect.any(Function));
});

it('should provide the game outcome', async () => {
  play.mockReturnValue('foo');
  const request = { query: {} };
  const status = jest.fn();
  const send = jest.fn();
  const response = { status, send };
  status.mockReturnValue(response);
  startServer();
  const callback = mockGet.mock.calls[0][1];
  await callback(request, response);
  expect(response.status).toHaveBeenCalledTimes(1);
  expect(response.status).toHaveBeenCalledWith(200);
  expect(response.send).toHaveBeenCalledTimes(1);
  expect(response.send).toHaveBeenCalledWith('foo');
});

it('should provide the error message when it fails', async () => {
  setupGame.mockRejectedValue(new Error('bar'));
  const request = { query: {} };
  const status = jest.fn();
  const send = jest.fn();
  const response = { status, send };
  status.mockReturnValue(response);
  startServer();
  const callback = mockGet.mock.calls[0][1];
  await callback(request, response);
  expect(response.status).toHaveBeenCalledTimes(1);
  expect(response.status).toHaveBeenCalledWith(500);
  expect(response.send).toHaveBeenCalledTimes(1);
  expect(response.send).toHaveBeenCalledWith({ message: 'bar' });
});

afterAll(() => {
  jest.unmock('express');
  jest.unmock('../setupGame');
  jest.unmock('../play');
});
