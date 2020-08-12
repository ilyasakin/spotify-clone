import React from 'react';
import { shallow } from 'enzyme';
import NavigationDivider from './NavigationDivider';

it('runs correctly', () => {
  const wrapper = shallow(<NavigationDivider />);
  expect(wrapper).toMatchSnapshot();
});
