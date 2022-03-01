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
  },
});

export const missionActions = missionsSlice.actions;

export default missionsSlice;
