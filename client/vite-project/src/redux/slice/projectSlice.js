// projectSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // You'll need to install axios separately
import configData from "../../../config.json"

// Define the initial state
const initialState = {
  projects: [],
  status: 'idle',
  error: null,
};

// Define the asynchronous thunk for fetching projects
export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  try {
    const token=localStorage.getItem("token")
    // Perform your API call here, e.g., using fetch or Axios
    const response = await axios.get(`${configData.SERVER_URL}/prject/getProject`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    });    return response.data;
  } catch (error) {
    throw Error('Failed to fetch projects');
  }
});

// Create a slice
const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
