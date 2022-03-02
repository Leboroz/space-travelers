import React, { useState } from 'react';
import Rockets from '../components/rockets/Rockets';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const RocketsPage = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch();
  }, []);

  return (
    <p>
      {
        <pre>
          <code>{JSON.stringify(api, null, '\t')}</code>
        </pre>
      }
    </p>
  );
};

export default RocketsPage;
