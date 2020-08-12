import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

it('runs correctly', () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper).toMatchSnapshot();
});
