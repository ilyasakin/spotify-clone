import NavButtonAlt from './NavButtonAlt';

export default {
  title: 'Topbar Navigation Button',
};

export const topbarNavigationButton: React.FC = () => {
  return (
    <div style={{ height: 300, position: 'relative' }}>
      <NavButtonAlt direction="left" />
      <NavButtonAlt direction="right" />
    </div>
  );
};
