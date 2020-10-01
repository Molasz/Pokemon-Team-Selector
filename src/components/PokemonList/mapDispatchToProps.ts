import { stateInterface } from '../../redux/stateInterface';

function mapDispatchToProps(state: stateInterface) {
  return { state };
}

export default mapDispatchToProps;
