import { shallow } from 'enzyme';
import NavMenu from './NavMenu';

it('runs correctly', () => {
  const wrapper = shallow(<NavMenu />);
  expect(wrapper).toMatchSnapshot();
});
