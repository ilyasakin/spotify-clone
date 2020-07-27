import React from 'react';
import { shallow } from 'enzyme';
import NowPlayingRight from './nowplaying-right';

it('runs correctly', () => {
  const wrapper = shallow(<NowPlayingRight />);
  expect(wrapper).toMatchSnapshot();
});
