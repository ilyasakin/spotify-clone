import React from 'react';
import { shallow } from 'enzyme';
import NavigationPlaylistListItem from './NavigationPlaylistItem';

it('runs correctly', () => {
  const wrapper = shallow(<NavigationPlaylistListItem text="test" />);
  expect(wrapper).toMatchSnapshot();
});
