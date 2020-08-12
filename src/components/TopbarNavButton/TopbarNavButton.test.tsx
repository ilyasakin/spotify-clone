import React from 'react';
import { shallow } from 'enzyme';
import TopbarNavBtn from './TopbarNavButton';

it('runs correctly for left', () => {
  const wrapper = shallow(<TopbarNavBtn direction="left" />);
  expect(wrapper).toMatchSnapshot();
});

it('runs correctly for right', () => {
  const wrapper = shallow(<TopbarNavBtn direction="right" />);
  expect(wrapper).toMatchSnapshot();
});
