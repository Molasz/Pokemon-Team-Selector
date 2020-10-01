import { addToTeam, morePokemon, nextPokemon, removeFromTeam } from './actions';
import types from './actionTypes';

import axios from 'axios';
jest.mock('axios');

describe('actions', () => {
  afterEach(() => jest.clearAllMocks());

  it('addToTeam', () => {
    const action = {
      type: types.ADD_TO_TEAM,
      payload: 1
    };

    expect(addToTeam(1)).toEqual(action);
  });

  it('removeFromTeam', () => {
    const action = {
      type: types.REMOVE_FROM_TEAM,
      payload: 1
    };

    expect(removeFromTeam(1)).toEqual(action);
  });

  it('nextPokemon', () => {
    const url = 'more pokemon';

    const action = {
      type: types.NEXT_POKEMON,
      payload: url
    };

    expect(nextPokemon(url)).toEqual(action);
  });

  it('morePokemon without error', async () => {
    axios.get.mockReturnValue(
      new Promise((resolve) =>
        resolve({
          data: {
            results: [
              {
                name: 'name',
                url: 'url'
              }
            ],
            next: ''
          }
        })
      )
    );

    const url = 'morePokemon';
    const dispatch = jest.fn();

    morePokemon(url)(dispatch);

    expect(axios.get.mock.calls[0][0]).toEqual(url);
  });

  it('morePokemon throw error', async () => {
    const error = 'Axios error';

    axios.get.mockReturnValue(() => {
      throw new Error(error);
    });

    const url = 'morePokemon';
    const dispatch = jest.fn();

    morePokemon(url)(dispatch);

    expect(axios.get.mock.calls[0][0]).toEqual(url);
  });
});
