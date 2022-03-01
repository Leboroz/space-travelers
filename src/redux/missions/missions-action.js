import { getMissions } from './missions-slice';

const getMissionsFromApi = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();

  const missionsData = [];

  data.forEach((mission) => {
    missionsData.push({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      mission_description: mission.description,
    });
  });

  dispatch(getMissions(missionsData));
};

export default getMissionsFromApi;
