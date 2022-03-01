import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Badge } from 'react-bootstrap';
import { missionActions } from '../../redux/missions/missions-slice';

const MissionItem = ({ id, name, description, status }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(missionActions.isJoined(id));
  };

  return (
    <tr>
      <td style={{ width: '10%' }}>{name}</td>
      <td style={{ width: '60%' }}>{description}</td>
      <td className="text-center" style={{ width: '15%' }}>
        {!status ? (
          <Badge bg="secondary">Not A Member</Badge>
        ) : (
          <Badge bg="primary">Active Member</Badge>
        )}
      </td>
      <td className="text-center" style={{ width: '15%' }}>
        {!status ? (
          <Button variant="outline-primary" onClick={clickHandler}>
            Join Mission
          </Button>
        ) : (
          <Button variant="outline-danger">Leave Mission</Button>
        )}
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool,
};

export default MissionItem;
