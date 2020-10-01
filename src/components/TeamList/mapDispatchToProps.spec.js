import mapDispatchToProps from './mapDispatchToProps';

it('mapDispatchToProps', () => {
  const state = {
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

  const output = {
    pokemon: [
      {
        id: 1,
        name: 'name',
        inTeam: true
      }
    ],
    team: [1]
  };

  expect(mapDispatchToProps(state)).toEqual(output);
});
