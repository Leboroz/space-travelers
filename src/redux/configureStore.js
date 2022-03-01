import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rockets';
export default configureStore({
  reducer: { rockets: rocketReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk }),
});
