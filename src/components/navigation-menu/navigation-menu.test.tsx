import React from 'react';
import { shallow } from 'enzyme';
import NavigationMenu from './navigation-menu';

it('runs correctly', () => {
  const wrapper = shallow(<NavigationMenu />);
  expect(wrapper.find('div').children()).toHaveLength(3);
  expect(wrapper).toMatchSnapshot();
});
