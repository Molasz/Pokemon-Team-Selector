import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from './mapDispatchToProps';
import './PokemonList.scss';

import { addToTeam, morePokemon } from '../../redux/actions';
import { stateInterface } from '../../redux/stateInterface';

function PokemonList({
  state,
  dispatch
}: {
  state: stateInterface;
  dispatch: Function;
}): JSX.Element {
  useEffect(() => {
    dispatch(morePokemon(state.next));
  }, [dispatch, state.next]);

  const list = state?.pokemon?.map((element) => {
    return (
      <div className='list__item' key={element.id}>
        <div className='item__pokemon'>
          <p className='pokemon__id'>{element.id}</p>
          <img
            className='pokemon__img'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${element.id}.png`}
            alt='sprite'
          />
        </div>
        <p className='item__name'>{element.name}</p>
        <img
          src={require('../../assets/pokeball.png')}
          alt='pokeball'
          onClick={() =>
            state.team.length < 6 && dispatch(addToTeam(element.id))
          }
          className='item__button'
          data-test='pokeball'
        />
      </div>
    );
  });

  return (
    <div className='pokemon-list'>
      <div className='pokemon-list__list' data-test='list'>
        {list.length ? list : 'Loading...'}
      </div>

      {state.pokemon.length !== 893 && (
        <div className='pokemon-list__next'>
          <span
            className='next__text'
            data-test='next'
            onClick={() => dispatch(morePokemon(state.next))}
          >
            Load more pokemon
          </span>
        </div>
      )}
    </div>
  );
}

export default connect(mapDispatchToProps)(PokemonList);
export { PokemonList };
