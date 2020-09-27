import React from 'react';
import { shallow } from 'enzyme';
import ViewPlaylist from './ViewPlaylist';

it('runs correctly', () => {
  const wrapper = shallow(<ViewPlaylist />);
  expect(wrapper).toMatchSnapshot();
});
