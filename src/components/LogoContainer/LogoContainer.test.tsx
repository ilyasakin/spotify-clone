import React from 'react';
import { shallow } from 'enzyme';
import LogoContainer from './LogoContainer';

it('runs correctly', () => {
  const wrapper = shallow(<LogoContainer />);
  expect(wrapper).toMatchSnapshot();
});
