import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { TeamList } from './TeamList';

jest.mock('../../redux/actions');

let container = null;

describe('TeamList', () => {
  const pokemon = [
    {
      id: 1,
      name: 'name',
      inTeam: true
    }
  ];

  const team = [1];

  const dispatch = jest.fn();

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
      render(
        <TeamList pokemon={pokemon} team={team} dispatch={dispatch} />,
        container
      );
    });
    expect(
      container.querySelector('[data-test=list]').childNodes.length
    ).toEqual(1);
  });

  it('should dispatch if sprite is clicked', () => {
    act(() => {
      render(
        <TeamList pokemon={pokemon} team={team} dispatch={dispatch} />,
        container
      );
      container
        .querySelector('[data-test=sprite]')
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(dispatch.mock.calls.length).toEqual(1);
  });
});
