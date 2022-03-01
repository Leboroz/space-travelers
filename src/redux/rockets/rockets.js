import { createSlice } from '@reduxjs/toolkit';

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState: { rocketsData: [] },
  reducers: {
    initRockets(state, action) {
      state.rocketsData.push(
        ...action.payload.map(
          ({
            id, rocket_name, description, flickr_images,
          }) => ({
            id,
            rocket_name,
            description,
            flickr_images,
            reserved: false,
          }),
        ),
      );
    },
    bookARocketOrCancel(state, action) {
      state.rocketsData = state.rocketsData.map((rocket) => (rocket.id === action.payload
        ? { ...rocket, reserved: !rocket.reserved }
        : rocket));
    },
  },
});

export const { initRockets, bookARocketOrCancel } = rocketSlice.actions;

export default rocketSlice.reducer;