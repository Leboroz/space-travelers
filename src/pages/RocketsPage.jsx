import PropTypes from 'prop-types';
import Rockets from '../components/rockets/Rockets';

const RocketsPage = ({ state }) => <Rockets list={state} />;

// prettier-ignore

RocketsPage.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      flickr_images: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
      rocket_name: PropTypes.string,
      reserved: PropTypes.bool,
    }),
  ).isRequired,
};

export default RocketsPage;
