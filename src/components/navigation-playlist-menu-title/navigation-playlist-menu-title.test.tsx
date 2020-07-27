import React from 'react';
import { shallow } from 'enzyme';
import NavigationPlaylistMenuTitle from './navigation-playlist-menu-title';

it('runs correctly', () => {
  const wrapper = shallow(<NavigationPlaylistMenuTitle />);
  expect(wrapper).toMatchSnapshot();
});
