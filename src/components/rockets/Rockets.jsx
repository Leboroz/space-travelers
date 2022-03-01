import React from 'react';
import RocketCard from './Card';

const Rockets = ({ list }) => {
  return (
    <div className="row">
      {list.map((rocket) => (
        <div className="col-sm-6 col-lg-12 mb-3">
          <RocketCard key={rocket.id} props={rocket} />
        </div>
      ))}
    </div>
  );
};

export default Rockets;
