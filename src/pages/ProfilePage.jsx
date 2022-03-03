import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import { filterReservedRockets } from '../redux/rockets/rockets';

const ProfilePage = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { missions, rockets } = state;
  const { missionsData } = missions;

  useEffect(() => {
    dispatch(filterReservedRockets());
  }, []);

  const reservedRockets = rockets.filtered;

  const getMissions = () => {
    const joinedMissions = missionsData.filter((mission) => mission.reserved);

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
    <Row>
      <Col>
        <h2>My Rockets</h2>
        <ListGroup>
          {
            // prettier-ignore
            reservedRockets && reservedRockets.map((rocket) => (
              <ListGroup.Item key={rocket.id} style={{display: 'flex', justifyContent: 'space-between'}}>
                {rocket.rocket_name}  {<a href={rocket.wikipedia} target="_blank"><Button>Read More</Button></a>}
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
  );
};

export default ProfilePage;
