import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import CancelButton from '../components/rockets/CancelButton';
import { filterReservedRockets } from '../redux/rockets/rockets';

const ProfilePage = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { missions, rockets } = state;
  const { missionsData } = missions;

  useEffect(() => {
    dispatch(filterReservedRockets());
  }, [dispatch]);

  const reservedRockets = rockets.filtered;

  const getMissions = () => {
    const joinedMissions = missionsData.filter((mission) => mission.reserved);

    if (joinedMissions.length > 0) {
      return joinedMissions.map((mission) => (
        <ListGroup.Item
          key={mission.mission_id}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {mission.mission_name}
          <a href={mission.wikipedia} target="_blank">
            <Button>Read More</Button>
          </a>
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
            reservedRockets && reservedRockets.length && reservedRockets.map(({id, rocket_name, wikipedia, reserved}) => (
              <ListGroup.Item key={id} style={{display: 'flex', justifyContent: 'space-between'}}>
                {rocket_name}  
                {<div style={{display: "flex", gap: "1rem"}}>
                  <a href={wikipedia} target="_blank">
                    <Button variant="outline-primary">Read More</Button>
                  </a>
                  <CancelButton dispatch={dispatch} variant="outline-danger" id={id} reserved={reserved}>Cancel reservation</CancelButton>
                </div>}
              </ListGroup.Item>
            ))
            || <ListGroup.Item>There is NO Rockets</ListGroup.Item>
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
