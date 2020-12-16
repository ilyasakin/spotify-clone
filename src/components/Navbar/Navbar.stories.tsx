import Navbar from './Navbar';

export default {
  title: 'Navbar',
};

export const navbar: React.FC = () => {
  return (
    <div style={{ height: 1440, width: 1024 }}>
      <Navbar />
    </div>
  );
};
