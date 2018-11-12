import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

it('renders correctly header component', () => {
  const HeaderComponent = renderer.create(<Header />).toJSON();
  expect(HeaderComponent).toMatchSnapshot();
});
