import TopbarNavBtn from './TopbarNavButton';

export default {
  title: 'Topbar Nav Button',
};

export const topbarNavBtn: React.FC = () => {
  return (
    <div style={{ height: 300, position: 'relative' }}>
      <TopbarNavBtn direction="left" />
      <TopbarNavBtn direction="right" />
    </div>
  );
};
