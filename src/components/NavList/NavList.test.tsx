import { shallow } from 'enzyme';
import NavList from './NavList';

it('runs correctly', () => {
  const wrapper = shallow(<NavList />);
  expect(wrapper).toMatchSnapshot();
});
