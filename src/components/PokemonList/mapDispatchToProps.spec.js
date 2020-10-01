import mapDispatchToProps from './mapDispatchToProps';

it('should return state', () => {
  const state = {
    pokemon: [],
    team: [],
    next: 'next'
  };

  expect(mapDispatchToProps(state)).toEqual({ state });
});
