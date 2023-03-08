import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';
export const getRockets = createAsyncThunk('rockets/getRockets',
  async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const newData = [];
      let newObj = {};
      data.forEach((e) => {
        newObj = {
          rocketId: e.rocket_id,
          image: e.flickr_images[0],
          name: e.rocket_name,
          description: e.description,
          reserved: false,
        };
        newData.push(newObj);
      });
      return newData;
    } catch (error) {
      return error.message();
    }
  });

export const setReserved = (id) => id;

const initialState = {
  rockets: [],
  isLoading: true,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    setReserved: (state, action) => {
      state.map((rocket) => {
        if (rocket.rocketId !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getRockets.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        rockets: action.payload,
      }))
      .addCase(getRockets.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default rocketsSlice.reducer;
