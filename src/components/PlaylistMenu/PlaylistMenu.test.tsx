import React from 'react';
import { shallow } from 'enzyme';
import PlaylistMenu from './PlaylistMenu';

it('runs correctly', () => {
  const wrapper = shallow(<PlaylistMenu />);
  expect(wrapper).toMatchSnapshot();
});
