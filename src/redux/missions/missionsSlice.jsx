import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MISSIONS_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missionsArray: [],
  ifSucceed: false,
  isLoading: false,
  errors: null,
};

const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await axios.get(MISSIONS_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const newMissionsArray = state.missionsArray.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
      return { ...state, missionsArray: newMissionsArray };
    },
    leaveMission: (state, action) => {
      const newMissionsArray = state.missionsArray.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
      return { ...state, missionsArray: newMissionsArray };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        ifSucceed: true,
        missionsArray: action.payload,
      }))
      .addCase(fetchMissions.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;

export { fetchMissions };

export default missionsSlice.reducer;
