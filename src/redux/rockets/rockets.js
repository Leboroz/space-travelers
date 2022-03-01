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
          }),
        ),
      );
    },
  },
});

export const { initRockets } = rocketSlice.actions;

export default rocketSlice.reducer;
