import React from 'react';
import { shallow } from 'enzyme';
import NavigationPlaylistMenuTitle from './NavigationPlaylistMenuTitle';

it('runs correctly', () => {
  const wrapper = shallow(<NavigationPlaylistMenuTitle />);
  expect(wrapper).toMatchSnapshot();
});
