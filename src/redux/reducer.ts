import types from './actionTypes';

import { stateInterface, actionInterface } from './stateInterface';

function reducer(
  state: stateInterface = { team: [], pokemon: [], next: '' },
  action: actionInterface
): stateInterface {
  switch (action.type) {
    case types.ADD_TO_TEAM:
      return { ...state, team: [...state.team, action.payload] };

    case types.REMOVE_FROM_TEAM:
      const newTeam = [...state.team];
      newTeam.splice(action.payload, 1);
      return { ...state, team: newTeam };

    case types.MORE_POKEMON:
      const newPokemon: stateInterface['pokemon'] = [
        ...state.pokemon,
        ...action.payload
      ];
      return { ...state, pokemon: newPokemon.slice(0, 893) };

    case types.NEXT_POKEMON:
      return { ...state, next: action.payload };

    default:
      return state;
  }
}

export default reducer;
