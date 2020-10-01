import React from 'react';

import PokemonList from './components/PokemonList/PokemonList';
import CartList from './components/TeamList/TeamList';

import './App.scss';

function App(): JSX.Element {
  return (
    <div>
      <h1 className='title'>Pokemon team selector</h1>
      <div className='container'>
        <PokemonList />
        <CartList />
      </div>
    </div>
  );
}

export default App;
