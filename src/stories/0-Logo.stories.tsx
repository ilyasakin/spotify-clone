import * as Icons from '../components/icons';

export default {
  title: 'Logo',
};

export const Logo: React.FC = () => (
  <div style={{ backgroundColor: '#000', display: 'inline-block' }}>
    <Icons.Logo style={{ height: '40px', width: '131px' }} />
  </div>
);
