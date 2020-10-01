import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const defaultState = {
  team: [],
  pokemon: [],
  next: 'https://pokeapi.co/api/v2/pokemon?limit=20'
};

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  reducer,
  defaultState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
