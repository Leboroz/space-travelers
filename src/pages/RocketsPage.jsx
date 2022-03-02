import PropTypes from 'prop-types';
import Rockets from '../components/rockets/Rockets';

const RocketsPage = ({ state }) => <Rockets list={state} />;

RocketsPage.propTypes = {
  state: PropTypes.arrayOf.isRequired,
};

export default RocketsPage;
