import React from 'react';
import { shallow } from 'enzyme';
import Topbar from './topbar';

it('runs correctly', () => {
  const wrapper = shallow(<Topbar />);
  expect(wrapper).toMatchSnapshot();
});
