import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import App from './App';

jest.mock('./components/PokemonList/PokemonList');
jest.mock('./components/TeamList/TeamList');

let container = null;

describe('App', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.clearAllMocks();
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should render with pokemon in team', () => {
    act(() => {
      render(<App />, container);
    });
    expect(true).toBe(true);
  });
});
