import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import Navbar from '../Navbar'
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';

const render = component => rtlRender(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={component}></Route>
      </Routes>      
    </BrowserRouter>    
  </Provider>
)

describe('Components render correctly', () => {
  test('Navbar', () => {
    const tree = render(<Navbar />);
    expect(tree).toMatchSnapshot();
  });    
});