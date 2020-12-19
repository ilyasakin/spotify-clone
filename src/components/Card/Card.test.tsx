import { shallow } from 'enzyme';
import Card from './Card';

it('runs correctly', () => {
  const wrapper = shallow(
    <Card
      song={{
        _id: 'test_id',
        artist: 'test_artist',
        cover: 'https://via.placeholder.com/1000',
        name: 'test_name',
      }}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
