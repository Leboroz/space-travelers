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

Rockets.propTypes = {
  list: PropTypes.arrayOf.isRequired,
};

export default Rockets;
