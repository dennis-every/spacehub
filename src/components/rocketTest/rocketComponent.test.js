import { screen, render as rtlRender } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import Rocket from '../Rocket';
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks';
import testSelector from '../../redux/testSelector';
import store from '../../redux/store';

jest.mock('../../redux/redux-hooks');
const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Rocket clicks', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useAppSelector.mockImplementation(testSelector);
    useAppDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should call dispatch', () => {
    render(<Rocket rocketId="falcon1" />);
    const btn = screen.getByText('Reserve Rocket');
    userEvent.click(btn);

    expect(useAppDispatch).toHaveBeenCalled();
  });
  it('should call dispatch', () => {
    render(<Rocket rocketId="falcon1" />);
    const btn = screen.getByText('Reserve Rocket');
    userEvent.click(btn);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'rockets/setReserved',
      payload: 'falcon1',
    });
  });
});
