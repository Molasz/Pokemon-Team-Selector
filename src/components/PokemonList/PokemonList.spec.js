import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { PokemonList } from './PokemonList';

jest.mock('../../redux/actions');

let container = null;

describe('PokemonList', () => {
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

  it('should render without pokemon', () => {
    const state = {
      pokemon: [],
      team: [],
      next: ''
    };

    const dispatch = jest.fn();

    act(() => {
      render(<PokemonList state={state} dispatch={dispatch} />, container);
    });
    expect(container.querySelector('[data-test=list]').innerHTML).toBe(
      'Loading...'
    );
  });

  it('should render with pokemon', () => {
    const state = {
      pokemon: [
        {
          id: 1,
          name: 'name',
          inTeam: false
        }
      ],
      team: [],
      next: ''
    };

    const dispatch = jest.fn();

    act(() => {
      render(<PokemonList state={state} dispatch={dispatch} />, container);
    });
    expect(container.querySelector('[data-test=list]').childNodes.length).toBe(
      1
    );
  });

  it('should dispatch if next__text is clicked', () => {
    const state = {
      pokemon: [],
      team: [],
      next: 'next'
    };
    const dispatch = jest.fn();

    act(() => {
      render(<PokemonList state={state} dispatch={dispatch} />, container);
      container
        .querySelector('[data-test=next]')
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(dispatch.mock.calls.length).toEqual(2);
  });

  it('should dispatch if next__text is clicked', () => {
    const state = {
      pokemon: [
        {
          id: 1,
          name: 'name',
          inTeam: false
        }
      ],
      team: [],
      next: 'next'
    };
    const dispatch = jest.fn();

    act(() => {
      render(<PokemonList state={state} dispatch={dispatch} />, container);
      container
        .querySelector('[data-test=pokeball]')
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(dispatch.mock.calls.length).toEqual(2);
  });
});
