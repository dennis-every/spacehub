import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import JoinedMissions from './JoinedMissions';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

const myMissions = [
  {
    mission_name: 'Thaicom',
    mission_id: '9D1B7E0',
    description:
      'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    reserved: true,
  },
];

describe('Test suite for the JoinedMissions component', () => {
  it('Expect to render a snapshot of the JoinedMission Component', () => {
    const joinedMission = render(
      <Provider store={store}>
        <JoinedMissions myMissions={myMissions} />
      </Provider>,
    );
    expect(joinedMission).toMatchSnapshot();
  });

  it('Expect to test if the text "My Missions" is inside the JoinedMissions component', () => {
    render(
      <Provider store={store}>
        <JoinedMissions myMissions={myMissions} />
      </Provider>,
    );
    expect(screen.getByText('My Missions')).toBeInTheDocument();
  });
});
