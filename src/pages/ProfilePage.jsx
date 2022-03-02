import React from 'react';
import { Row, Col } from 'react-bootstrap';
const ProfilePage = () => {
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
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default ProfilePage;
