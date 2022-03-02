import PropTypes from 'prop-types';
import RocketCard from './Card';

const Rockets = ({ list }) => (
  <div className="row">
    {list.map((rocket) => (
      <div className="col-sm-6 col-lg-12 mb-3" key={rocket.id}>
        <RocketCard props={rocket} />
      </div>
    ))}
  </div>
);

// prettier-ignore

Rockets.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      flickr_images: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
      rocket_name: PropTypes.string,
      reserved: PropTypes.bool,
    }),
  ).isRequired,
};

export default Rockets;
