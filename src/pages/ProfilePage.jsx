import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { filterReservedRockets } from '../redux/rockets/rockets';
import { Row, Col, ListGroup } from 'react-bootstrap';
const ProfilePage = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { missions, rockets } = state;

  useEffect(() => {
    dispatch(filterReservedRockets());
  }, []);

  const reservedRockets = rockets.filtered;

  return (
    <>
      <Row>
        <Col>
          <h2>My Rockets</h2>
          <ListGroup>
            {reservedRockets &&
              reservedRockets.map((rocket) => (
                <ListGroup.Item key={rocket.rocket_name}>
                  {rocket.rocket_name}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
        <Col>
          <h2> My Missions </h2>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default ProfilePage;
