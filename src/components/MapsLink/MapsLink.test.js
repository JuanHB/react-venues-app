import React from 'react';
import renderer from 'react-test-renderer';
import MapsLink from './MapsLink';

const address = 'New York, NY';

it('renders correctly MapsLink component', () => {
  const MapsLinkComponent = renderer.create(
    <MapsLink address={address} />
  ).toJSON();
  expect(MapsLinkComponent).toMatchSnapshot();
});