import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from './Mission';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

const missionObject = {
  mission_name: 'Thaicom',
  mission_id: '9D1B7E0',
  description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
};

describe('Test suite for the Mission component', () => {
  it('Expect to render a Snapshot of the Mission component', () => {
    const mission = render(
      <Provider store={store}>
        <table>
          <tbody>
            <tr>
              <Mission key={missionObject.mission_id} mission={missionObject} />
            </tr>
          </tbody>
        </table>
      </Provider>,
    );
    expect(mission).toMatchSnapshot();
  });

  it('Expect to test if the text "Join Mission" is inside the Mission component', () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <tr>
              <Mission key={missionObject.mission_id} mission={missionObject} />
            </tr>
          </tbody>
        </table>
      </Provider>,
    );
    expect(screen.getByText('Join Mission')).toBeInTheDocument();
  });
});
