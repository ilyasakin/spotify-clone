import React from 'react';
import { shallow } from 'enzyme';
import NavButton from './NavButton';
import { HomeActive } from '../icons';

it('runs correctly', () => {
  const wrapper = shallow(<NavButton Icon={HomeActive} text="test" active />);
  expect(wrapper.find('div').hasClass('active')).toEqual(true);
  expect(wrapper).toMatchSnapshot();
});
