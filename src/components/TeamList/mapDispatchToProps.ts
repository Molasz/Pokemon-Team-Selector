import { stateInterface } from '../../redux/stateInterface';

function mapDispatchToProps(state: stateInterface) {
  return {
    team: state.team,
    pokemon: state.pokemon
  };
}

export default mapDispatchToProps;
