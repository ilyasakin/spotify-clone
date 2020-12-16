import { shallow } from 'enzyme';
import NavMenuItem from './NavMenuItem';
import { PlaylistHeart } from '../icons';

it('runs correctly', () => {
  const wrapper = shallow(<NavMenuItem text="test_text" Icon={PlaylistHeart} gradient />);
  expect(wrapper).toMatchSnapshot();
});
