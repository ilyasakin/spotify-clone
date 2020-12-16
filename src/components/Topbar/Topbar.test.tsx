import { shallow } from 'enzyme';
import Topbar from './Topbar';

it('runs correctly', () => {
  const wrapper = shallow(<Topbar />);
  expect(wrapper).toMatchSnapshot();
});
