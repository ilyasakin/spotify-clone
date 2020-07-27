import React from 'react';
import { shallow } from 'enzyme';
import NowPlayingLeft from './nowplaying-left';

it('runs correctly', () => {
  const wrapper = shallow(<NowPlayingLeft />);
  expect(wrapper).toMatchSnapshot();
});
