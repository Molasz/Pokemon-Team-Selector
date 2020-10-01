import axios from 'axios';
import types from './actionTypes';
import { stateInterface } from './stateInterface';

interface pokemon {
  id: number;
  name: string;
  img: string;
  inTeam: boolean;
}

export function addToTeam(id: number) {
  return { type: types.ADD_TO_TEAM, payload: id };
}

export function removeFromTeam(id: number) {
  return { type: types.REMOVE_FROM_TEAM, payload: id };
}

export function nextPokemon(url: string) {
  return { type: types.NEXT_POKEMON, payload: url };
}

function morePokemonSuccess(pokemon: stateInterface['pokemon']) {
  return { type: types.MORE_POKEMON, payload: pokemon };
}

export const morePokemon = (url: string) => async (dispatch: Function) => {
  try {
    const response = await axios.get(url);
    const newPokemon: stateInterface['pokemon'] = response.data.results.map(
      (element: { name: string; url: string }) => ({
        name: element.name,
        id: element.url.split('/')[6],
        inTeam: false
      })
    );
    dispatch(nextPokemon(response.data.next));
    return dispatch(morePokemonSuccess(newPokemon));
  } catch (err) {
    return err;
  }
};
