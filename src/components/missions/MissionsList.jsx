import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MissionItem from './MissionItem';
import getMissionsFromApi from '../../redux/missions/missions-action';

const MissionsList = () => {
  const missionsData = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsFromApi());
  }, [dispatch]);

  return (
    <Table striped bordered hover responsive="md">
      <thead>
        <tr>
          <th>Missions</th>
          <th>Description</th>
          <th>Status</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {missionsData.map((mission) => (
          <MissionItem
            key={mission.mission_id}
            id={mission.mission_id}
            name={mission.mission_name}
            description={mission.mission_description}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default MissionsList;
