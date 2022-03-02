import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Badge } from 'react-bootstrap';
import { isJoined } from '../../redux/missions/missions-slice';

const MissionItem = (props) => {
  // prettier-ignore
  const {
    id,
    name,
    description,
    status,
  } = props;

  const dispatch = useDispatch();

  const joinClickHandler = () => {
    dispatch(isJoined(id));
  };

  const leaveClickHandler = () => {
    dispatch(isJoined(id));
  };

  const badge = status
    ? { style: 'primary', text: 'Active Member' }
    : { style: 'secondary', text: 'Not A Member' };

  return (
    <tr>
      <td style={{ width: '10%' }}>{name}</td>
      <td style={{ width: '60%' }}>{description}</td>
      <td className="text-center" style={{ width: '15%' }}>
        <Badge bg={badge.style}>{badge.text}</Badge>
      </td>
      <td className="text-center" style={{ width: '15%' }}>
        {!status ? (
          <Button variant="outline-primary" onClick={joinClickHandler}>
            Join Mission
          </Button>
        ) : (
          <Button variant="outline-danger" onClick={leaveClickHandler}>
            Leave Mission
          </Button>
        )}
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default MissionItem;
