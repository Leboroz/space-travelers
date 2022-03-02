import { Badge, Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { bookARocketOrCancel } from '../../redux/rockets/rockets';

const RocketCard = ({ props }) => {
  // prettier-ignore
  const {
    id,
    flickr_images,
    description,
    rocket_name,
    reserved,
  } = props;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(bookARocketOrCancel(id));
  };
  return (
    <Card>
      <div className="row">
        <div className="col-lg-4 col-xl-3">
          <Card.Img variant="bottom" src={flickr_images[0]} />
        </div>
        <div className="col-lg-8 col-xl-9">
          <Card.Body>
            <Card.Title>
              {reserved && <Badge bg="info">Reserved</Badge>}
              {rocket_name}
            </Card.Title>
            <Card.Text style={{ maxHeight: '221px', overflow: 'auto' }}>
              {description}
            </Card.Text>
            <Button
              onClick={handleClick}
              variant={reserved ? 'outline-danger' : 'primary'}
            >
              {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

RocketCard.propTypes = {
  props: PropTypes.objectOf.isRequired,
  id: PropTypes.string.isRequired,
  flickr_images: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rocket_name: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketCard;
