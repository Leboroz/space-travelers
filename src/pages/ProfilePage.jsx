import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const state = useSelector((state) => state);

  const { missions, rockets } = state;

  console.log(missions, rockets);

  const getMissions = () => {
    const joinedMissions = missions.missionsData.filter(
      (mission) => mission.reserved
    );

    if (joinedMissions.length === 0) {
      return <li>There is No Missions</li>;
    }
    return joinedMissions.map((mission) => (
      <li key={mission.mission_id}>{mission.mission_name}</li>
    ));
  };

  return (
    <>
      <Row>
        <Col>
          <h2>My Rockets</h2>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </Col>
        <Col>
          <h2> My Missions </h2>
          <ul>{getMissions()}</ul>
        </Col>
      </Row>
    </>
  );
};

export default ProfilePage;
