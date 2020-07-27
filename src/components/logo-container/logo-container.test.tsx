import React from 'react';
import { shallow } from 'enzyme';
import LogoContainer from './logo-container';

it('runs correctly', () => {
  const wrapper = shallow(<LogoContainer />);
  expect(wrapper).toMatchSnapshot();
});
