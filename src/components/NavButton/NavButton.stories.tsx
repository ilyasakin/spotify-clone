import NavButton from './NavButton';
import { Home, HomeActive } from '../icons';

export default {
  title: 'Navigation Button',
};

export const inactive: React.FC = () => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
    >
      <div style={{ display: 'block', width: 300 }}>
        <NavButton Icon={Home} text="Home" />
      </div>
    </div>
  );
};

export const active: React.FC = () => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
    >
      <div style={{ display: 'block', width: 300 }}>
        <NavButton Icon={HomeActive} text="Home" active />
      </div>
    </div>
  );
};
