import { shallow } from 'enzyme';
import NowPlayingCenter from './NowplayingCenter';

it('runs correctly', () => {
  const wrapper = shallow(<NowPlayingCenter />);
  expect(wrapper).toMatchSnapshot();
});
