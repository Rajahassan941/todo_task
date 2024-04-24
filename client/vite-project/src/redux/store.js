import { configureStore } from '@reduxjs/toolkit';
import projectReducer from "./slice/projectSlice"

const store = configureStore({
  reducer: {
    projects: projectReducer,
    // Add other reducers here if any
  },
});

export default store;
