import React from 'react';
import { shallow } from 'enzyme';
import DownloadButton from './download-button';

it('runs correctly', () => {
  const wrapper = shallow(<DownloadButton />);
  expect(wrapper).toMatchSnapshot();
});
