import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import MissionsContainer from '../../components/MissionsContainer';
import store from '../store';

const mockStore = configureStore([]);

describe('Missions redux state tests', () => {
  it('Expect to initially set missions to an empty object', () => {
    const state = store.getState().missions;
    const initialState = {
      missionsArray: [], ifSucceed: false, isLoading: false, errors: null,
    };
    expect(state).toEqual(initialState);
  });
  it('Expect to display one mission from mockStore', () => {
    const missionsArray = [
      {
        mission_name: 'Thaicom',
        mission_id: '9D1B7E0',
        description:
          'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        reserved: true,
      },
    ];
    const state = {
      missions: {
        missionsArray,
        ifSucceed: true,
        isLoading: false,
        errors: null,
      },
    };
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <MissionsContainer />
      </Provider>,
    );
    const missionName = screen.getByText('Thaicom');
    expect(missionName).toBeInTheDocument();
    expect(store.getState).toMatchSnapshot();
  });
});
