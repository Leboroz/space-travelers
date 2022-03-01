import { createSlice } from '@reduxjs/toolkit';

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
  },
  reducers: {
    getMissions(state, action) {
      const missionsData = action.payload;
      state.missions.push(...missionsData);
    },
  },
});

export const missionActions = missionsSlice.actions;

export default missionsSlice;
