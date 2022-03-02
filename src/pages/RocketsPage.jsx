import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Rockets from '../components/rockets/Rockets';
import initState from '../redux/rockets/rocketsAPI';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rockets.rocketsData);

  useEffect(() => {
    dispatch(initState());
  }, [dispatch]);

  return <Rockets list={state} />;
};

export default RocketsPage;
