import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [{
    rocketId: 'falcon1',
    image: 'https://imgur.com/DaCfMsj.jpg',
    name: 'Falcon 1',
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
  }],
  isLoading: true,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
});

export default rocketsSlice.reducer;
