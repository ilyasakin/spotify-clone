import { shallow } from 'enzyme';
import NavListItem from './NavListItem';

it('runs correctly', () => {
  const wrapper = shallow(<NavListItem text="test" />);
  expect(wrapper).toMatchSnapshot();
});
