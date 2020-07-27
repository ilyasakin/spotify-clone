import React from 'react';
import { shallow } from 'enzyme';
import Card from './card';

it('runs correctly', () => {
  const wrapper = shallow(
    <Card song={{ _id: 'test_id', artist: 'test_artist', cover: '', name: 'test_name' }} />,
  );
  expect(wrapper).toMatchSnapshot();
});
