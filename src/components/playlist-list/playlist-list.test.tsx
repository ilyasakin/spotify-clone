import React from 'react';
import { shallow } from 'enzyme';
import PlaylistList from './playlist-list';

it('runs correctly', () => {
  const wrapper = shallow(<PlaylistList />);
  expect(wrapper).toMatchSnapshot();
});
