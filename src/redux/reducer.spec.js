import reducer from './reducer';
import types from './actionTypes';

describe('reducer', () => {
  it('Default', () => {
    const newState = {
      pokemon: [],
      team: [],
      next: ''
    };

    expect(reducer(undefined, {})).toEqual(newState);
  });

  it('ADD TO TEAM', () => {
    const state = {
      pokemon: [
        {
          id: 1,
          name: 'name',
          inTeam: true
        }
      ],
      team: [],
      next: ''
    };

    const action = {
      type: types.ADD_TO_TEAM,
      payload: 1
    };

    const newState = {
      pokemon: [
        {
          id: 1,
          name: 'name',
          inTeam: true
        }
      ],
      team: [1],
      next: ''
    };

    expect(reducer(state, action)).toEqual(newState);
  });

  it('REMOVE FROM TEAM', () => {
    const state = {
      pokemon: [
        {
          id: 1,
          name: 'name',
          inTeam: false
        }
      ],
      team: [1],
      next: ''
    };

    const action = {
      type: types.REMOVE_FROM_TEAM,
      payload: 0
    };

    const newState = {
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

    expect(reducer(state, action)).toEqual(newState);
  });

  it('MORE POKEMON', () => {
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

    const action = {
      type: types.MORE_POKEMON,
      payload: [
        {
          id: 2,
          name: 'name',
          inTeam: false
        }
      ]
    };

    const newState = {
      pokemon: [
        {
          id: 1,
          name: 'name',
          inTeam: false
        },
        {
          id: 2,
          name: 'name',
          inTeam: false
        }
      ],
      team: [],
      next: ''
    };

    expect(reducer(state, action)).toEqual(newState);
  });

  it('NEXT POKEMON', () => {
    const state = {
      pokemon: [],
      team: [],
      next: ''
    };

    const action = {
      type: types.NEXT_POKEMON,
      payload: 'more pokemon'
    };

    const newState = {
      pokemon: [],
      team: [],
      next: 'more pokemon'
    };

    expect(reducer(state, action)).toEqual(newState);
  });
});
