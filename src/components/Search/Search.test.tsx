import { shallow } from 'enzyme';
import Search from './Search';

it('runs correctly', () => {
  const wrapper = shallow(<Search />);
  expect(wrapper).toMatchSnapshot();
});
