const initState = (payload) => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  dispatch(await response.json());
};

export default initState;
