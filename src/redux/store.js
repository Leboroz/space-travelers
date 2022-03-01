import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missions-slice';

const store = configureStore({
  reducer: {
    missions: missionsSlice,
  },
});

export default store;
