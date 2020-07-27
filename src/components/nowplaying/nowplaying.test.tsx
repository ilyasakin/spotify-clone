import React from 'react';
import { shallow } from 'enzyme';
import NowPlaying from './nowplaying';

it('runs correctly', () => {
  const wrapper = shallow(<NowPlaying />);
  expect(wrapper).toMatchSnapshot();
});
