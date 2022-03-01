import { createSlice } from '@reduxjs/toolkit';

export const rocketSlice = createSlice({
  name: 'Rockets',
  initialState: {},
  reducers: {
    initRockets(state, action) {
      state = action.payload;
    },
  },
});

export const { initRockets } = rocketSlice.actions;

export default rocketSlice.reducer;
