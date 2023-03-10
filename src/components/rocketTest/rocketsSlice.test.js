import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import RocketsContainer from '../RocketsContainer';
import store from '../../redux/store';

const mockStore = configureStore([]);

describe('Rockets redux state tests', () => {
  it('Expect to initially set rockets to an empty object', () => {
    const state = store.getState().rockets;
    const initialState = {
      rockets: [], isLoading: true,
    };
    expect(state).toEqual(initialState);
  });
  it('Expect to display one rocket from mockStore', () => {
    const rockets = [
      {
        rocketId: 'falcon1',
        name: 'Falcon 1',
        description:
          'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        reserved: true,
      },
    ];
    const state = {
      rockets: {
        rockets,
        isLoading: false,
      },
    };
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <RocketsContainer />
      </Provider>,
    );
    const name = screen.getByText('Falcon 1');
    expect(name).toBeInTheDocument();
    expect(store.getState).toMatchSnapshot();
  });
});
