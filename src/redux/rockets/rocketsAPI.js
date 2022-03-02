import { initRockets } from './rockets';

const initState = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  dispatch(initRockets(data));
};

export default initState;
