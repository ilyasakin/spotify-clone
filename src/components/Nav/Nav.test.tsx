import React from 'react';
import { shallow } from 'enzyme';
import { HashRouter } from 'react-router-dom';
import Nav from './Nav';

it('runs correctly', () => {
  const wrapper = shallow(
    <HashRouter>
      <Nav />
    </HashRouter>,
  );

  expect(wrapper.find('.navigation-menu')).toHaveLength(3);
  expect(wrapper).toMatchSnapshot();
});
