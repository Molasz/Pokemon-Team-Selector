import React from 'react';
import { connect } from 'react-redux';

import { stateInterface } from '../../redux/stateInterface';
import { removeFromTeam } from '../../redux/actions';

import './TeamList.scss';
import mapDispatchToProps from './mapDispatchToProps';

function TeamList({
  team,
  pokemon,
  dispatch
}: {
  team: stateInterface['team'];
  pokemon: stateInterface['pokemon'];
  dispatch: Function;
}): JSX.Element {
  const list = team.map((element, i) => {
    const teamElement = pokemon[element - 1];
    return (
      <div className='team-list__item' key={i}>
        <img
          className='item__img'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${teamElement.id}.png`}
          alt='sprite'
          data-test='sprite'
          onClick={() => dispatch(removeFromTeam(i))}
        />
      </div>
    );
  });

  return (
    <>
      {team.length > 0 && (
        <section className='team-continer'>
          <div className='team'>
            <p className='team__title'>MY POKEMON TEAM</p>
            <div className='team__team-list' data-test='list'>
              {list}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default connect(mapDispatchToProps)(TeamList);
export { TeamList };
