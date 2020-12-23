import NavMenu from './Nav';

export default {
  title: 'Navigation Menu',
};

export const navigationMenu: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
    <div style={{ display: 'block', width: 300 }}>
      <NavMenu />
    </div>
  </div>
);
