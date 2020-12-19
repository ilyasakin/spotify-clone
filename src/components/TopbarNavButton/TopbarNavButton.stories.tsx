import TopbarNavBtn from './TopbarNavButton';

export default {
  title: 'Topbar Navigation Button',
};

export const topbarNavigationButton: React.FC = () => {
  return (
    <div style={{ height: 300, position: 'relative' }}>
      <TopbarNavBtn direction="left" />
      <TopbarNavBtn direction="right" />
    </div>
  );
};
