import React from 'react';
import { shallow } from 'enzyme';
import NavigationButton from './NavigationButton';
import { HomeActive } from '../icons';

it('runs correctly', () => {
  const wrapper = shallow(<NavigationButton Icon={HomeActive} text="test" active />);
  expect(wrapper.find('div').hasClass('active')).toEqual(true);
  expect(wrapper).toMatchSnapshot();
});
