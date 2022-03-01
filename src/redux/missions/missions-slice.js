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
      state.missionsData.forEach((mission) => {
        if (mission.mission_id === id) {
          mission.reserved = true;
        }
      });
    },
    isLeft(state, action) {
      const id = action.payload;
      state.missionsData.forEach((mission) => {
        if (mission.mission_id === id) {
          mission.reserved = false;
        }
      });
    },
  },
});

export const { getMissions, isJoined, isLeft } = missionsSlice.actions;

export default missionsSlice.reducer;
