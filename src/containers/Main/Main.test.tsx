import { shallow } from 'enzyme';
import Main from './Main';

it('runs correctly', () => {
  const wrapper = shallow(<Main />);
  expect(wrapper).toMatchSnapshot();
});
