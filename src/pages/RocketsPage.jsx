import PropTypes from 'prop-types';
import Rockets from '../components/rockets/Rockets';

const RocketsPage = ({ state }) => <Rockets list={state} />;

RocketsPage.propTypes = {
  state: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RocketsPage;
