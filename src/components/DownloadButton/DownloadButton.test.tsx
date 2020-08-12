import React from 'react';
import { shallow } from 'enzyme';
import DownloadButton from './DownloadButton';

it('runs correctly', () => {
  const wrapper = shallow(<DownloadButton />);
  expect(wrapper).toMatchSnapshot();
});
