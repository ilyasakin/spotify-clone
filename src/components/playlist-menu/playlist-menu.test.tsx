import React from 'react';
import { shallow } from 'enzyme';
import PlaylistMenu from './playlist-menu';

it('runs correctly', () => {
  const wrapper = shallow(<PlaylistMenu />);
  expect(wrapper).toMatchSnapshot();
});
