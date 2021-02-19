import { shallow } from 'enzyme';
import NowPlaying from './Nowplaying';

it('runs correctly', () => {
  const wrapper = shallow(<NowPlaying />);
  expect(wrapper).toMatchSnapshot();
});
