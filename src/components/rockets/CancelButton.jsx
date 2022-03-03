import { bool, number } from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import {
  bookARocketOrCancel,
  filterReservedRockets,
} from '../../redux/rockets/rockets';

const CancelButton = ({ id, reserved }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(bookARocketOrCancel(id));
    dispatch(filterReservedRockets());
  };

  return (
    <>
      {!reserved ? (
        <Button onClick={handleClick} variant="outline-primary">
          Reserve Rocket
        </Button>
      ) : (
        <Button onClick={handleClick} variant="outline-danger">
          Cancel Reservation
        </Button>
      )}
    </>
  );
};

CancelButton.propTypes = {
  id: number.isRequired,
  reserved: bool.isRequired,
};

export default CancelButton;
