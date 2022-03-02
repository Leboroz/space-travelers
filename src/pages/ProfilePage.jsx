import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { filterReservedRockets } from '../redux/rockets/rockets';

const ProfilePage = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { missions, rockets } = state;

  useEffect(() => {
    dispatch(filterReservedRockets());
  }, []);

  const reservedRockets = rockets.filtered;

  const [missonsData] = missions;

  const getMissions = () => {
    const joinedMissions = missonsData.filter((mission) => mission.reserved);

    if (joinedMissions.length > 0) {
      return joinedMissions.map((mission) => (
        <ListGroup.Item key={mission.mission_id}>
          {mission.mission_name}
        </ListGroup.Item>
      ));
    }
    return <ListGroup.Item>There is No Missions</ListGroup.Item>;
  };

  return (
    <>
      <Row>
        <Col>
          <h2>My Rockets</h2>
          <ListGroup>
            {
              // prettier-ignore
              reservedRockets && reservedRockets.map((rocket) => (
                <ListGroup.Item key={rocket.id}>
                  {rocket.rocket_name}
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </Col>

        <Col>
          <h2> My Missions </h2>
          <ListGroup>{getMissions()}</ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProfilePage;
