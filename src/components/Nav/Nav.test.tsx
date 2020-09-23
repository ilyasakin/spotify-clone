import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

it('runs correctly', () => {
  const wrapper = shallow(<Nav />);
  expect(wrapper.find('div').children()).toHaveLength(3);
  expect(wrapper).toMatchSnapshot();
});
