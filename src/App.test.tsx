import React from 'react';
import { shallow } from 'enzyme';
// eslint-disable-next-line import/extensions
import App from './App';

it('runs correctly', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
