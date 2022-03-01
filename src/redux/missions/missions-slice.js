import { createSlice } from '@reduxjs/toolkit';

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missionsData: [],
  },
  reducers: {
    getMissions(state, action) {
      const data = action.payload;
      state.missionsData.push(...data);
    },
    isJoined(state, action) {
      const id = action.payload;
      state.missionsData.map((mission) => {
        if (mission.mission_id === id) {
          mission.reserved = true;
        }
      });
    },
  },
});

export const missionActions = missionsSlice.actions;

export default missionsSlice;
