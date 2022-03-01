import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = ({ name, description }) => (
  <tr>
    <td>{name}</td>
    <td>{description}</td>
    <td>Status</td>
    <td>buttons</td>
  </tr>
);

MissionItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionItem;
