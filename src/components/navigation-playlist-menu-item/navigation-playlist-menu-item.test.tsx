import React from 'react';
import { shallow } from 'enzyme';
import NavigationPlaylistMenuItem from './navigation-playlist-menu-item';
import { PlaylistHeart } from '../icons';

it('runs correctly', () => {
  const wrapper = shallow(
    <NavigationPlaylistMenuItem text="test_text" Icon={PlaylistHeart} gradient />,
  );
  expect(wrapper).toMatchSnapshot();
});
