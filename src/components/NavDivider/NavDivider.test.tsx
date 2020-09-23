import React from 'react';
import { shallow } from 'enzyme';
import NavDivider from './NavDivider';

it('runs correctly', () => {
  const wrapper = shallow(<NavDivider />);
  expect(wrapper).toMatchSnapshot();
});
