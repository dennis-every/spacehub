import React from 'react';
import {
  fireEvent,
  screen,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import { Provider } from 'react-redux';
import store from '../../redux/store';


const provider = (component) =>{
  return(
  <Provider store={store}>
    <BrowserRouter>{component}</BrowserRouter>    
  </Provider>
)}

describe('Components render correctly', () => {
  test('Navbar', () => {
    const tree = renderer
    .create(provider(<Navbar />))
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
})