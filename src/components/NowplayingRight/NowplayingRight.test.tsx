import React from 'react';
import { shallow } from 'enzyme';
import NowPlayingRight from './NowplayingRight';

it('runs correctly', () => {
  const wrapper = shallow(<NowPlayingRight />);
  expect(wrapper).toMatchSnapshot();
});
