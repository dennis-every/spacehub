import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MISSIONS_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  ifSucceed: false,
  isLoading: false,
  errors: null,
};

const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    try{
      const response = await axios.get(MISSIONS_URL);
      return response
    } catch (err) {
      return err.message;
    }
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMissions.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMissions.fulfilled]: (state) => {
      state.isLoading = false;
      state.ifSucceed = true;
      state.missions = action.payload;
    },
    [fetchMissions.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export { fetchMissions }

export default missionsSlice.reducer;
