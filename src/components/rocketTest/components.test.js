import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import Rocket from '../Rocket';
import RocketsContainer from '../RocketsContainer';
import ReservedRockets from '../ReservedRockets';
import { Provider } from 'react-redux';
import store from '../../redux/store';

const render = component => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>
)

describe('Components render correctly', () => {
  test('Rocket', () => {
    const tree = render(<Rocket />);
    expect(tree).toMatchSnapshot();
  });
  test('RocketsContainer', () => {
    const tree = render(<RocketsContainer />);
    expect(tree).toMatchSnapshot();
  });
  test('ReservedRockets', () => {
    const tree = render(<ReservedRockets />);
    expect(tree).toMatchSnapshot();
  });  
});
