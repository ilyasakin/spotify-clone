import { shallow } from 'enzyme';
import Section from './Section';

it('runs correctly', () => {
  const wrapper = shallow(
    <Section
      data={[
        { _id: 'test_id_1', name: 'test_name', cover: '', artist: 'test_artist' },
        { _id: 'test_id_2', name: 'test_name', cover: '', artist: 'test_artist' },
        { _id: 'test_id_3', name: 'test_name', cover: '', artist: 'test_artist' },
      ]}
      title="test"
    />,
  );
  expect(wrapper.find('.content').children()).toHaveLength(3);
  expect(wrapper).toMatchSnapshot();
});
