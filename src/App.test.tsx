import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

// This is the section where we mock `fetch`
const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    } as Response);
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe('App', () => {
  it('should work as expected', async () => {
    await act(() => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    });
  });

  it('adds 2 numbers', () => {
    expect(1 + 1).toBe(2);
  });
});
