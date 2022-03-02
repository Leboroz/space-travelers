import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MissionItem from './MissionItem';
import getMissionsFromApi from '../../redux/missions/missions-action';

const MissionsList = () => {
  const missionsItem = useSelector((state) => state.missions.missionsData);
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
        {missionsItem.map((item) => (
          <MissionItem
            key={item.mission_id}
            id={item.mission_id}
            name={item.mission_name}
            description={item.mission_description}
            status={item.reserved}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default MissionsList;
