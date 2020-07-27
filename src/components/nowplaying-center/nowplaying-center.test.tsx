import React from 'react';
import { shallow } from 'enzyme';
import NowPlayingCenter from './nowplaying-center';

it('runs correctly', () => {
  const wrapper = shallow(<NowPlayingCenter />);
  expect(wrapper).toMatchSnapshot();
});
