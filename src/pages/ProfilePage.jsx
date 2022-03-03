import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// prettier-ignore
import {
  Row,
  Col,
  ListGroup,
  Button,
} from 'react-bootstrap';
import CancelButton from '../components/rockets/CancelButton';
import { filterReservedRockets } from '../redux/rockets/rockets';
import { isJoined } from '../redux/missions/missions-slice';

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
          className="d-flex justify-content-between"
        >
          {mission.mission_name}

          <div className="d-flex gap-2">
            <a href={mission.wikipedia} target="_blank" rel="noreferrer">
              <Button variant="outline-primary">Read More</Button>
            </a>
            <Button
              variant="outline-danger"
              onClick={() => dispatch(isJoined(mission.mission_id))}
            >
              Cancel Mission
            </Button>
          </div>
        </ListGroup.Item>
      ));
    }
    return <ListGroup.Item>There are No Missions</ListGroup.Item>;
  };

  return (
    <Row>
      <Col>
        <h2>My Rockets</h2>
        <ListGroup>
          {
            // prettier-ignore
            (reservedRockets && reservedRockets.length && reservedRockets.map(({
              id,
              rocket_name,
              wikipedia,
              reserved,
            }) => (
              <ListGroup.Item key={id} className="d-flex justify-content-between">
                {rocket_name}
                <div className="d-flex gap-2">
                  <a href={wikipedia} target="_blank" rel="noreferrer">

                    <Button variant="outline-primary">Read More</Button>
                  </a>
                  <CancelButton dispatch={dispatch} variant="outline-danger" id={id} reserved={reserved}>Cancel reservation</CancelButton>
                </div>
              </ListGroup.Item>
            ))) || (<ListGroup.Item>There are No Rockets</ListGroup.Item>)
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
