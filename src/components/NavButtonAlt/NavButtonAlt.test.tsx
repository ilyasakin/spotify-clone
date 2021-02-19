import { shallow } from 'enzyme';
import NavButtonAlt from './NavButtonAlt';

it('runs correctly for left', () => {
  const wrapper = shallow(<NavButtonAlt direction="left" />);
  expect(wrapper).toMatchSnapshot();
});

it('runs correctly for right', () => {
  const wrapper = shallow(<NavButtonAlt direction="right" />);
  expect(wrapper).toMatchSnapshot();
});
