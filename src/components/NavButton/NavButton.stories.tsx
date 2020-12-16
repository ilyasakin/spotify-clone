import NavButton from './NavButton';
import { Home, HomeActive, Search, SearchActive, Library, LibraryActive } from '../icons';

export default {
  title: 'NavigationButton',
};

export const navigationButton: React.FC = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <div style={{ display: 'grid', rowGap: 10 }}>
        <NavButton Icon={Home} text="Home" />
        <NavButton Icon={HomeActive} text="Home" active />
      </div>
      <div style={{ display: 'grid', rowGap: 10 }}>
        <NavButton Icon={Search} text="Search" />
        <NavButton Icon={SearchActive} text="Search" active />
      </div>
      <div style={{ display: 'grid', rowGap: 10 }}>
        <NavButton Icon={Library} text="Library" />
        <NavButton Icon={LibraryActive} text="Library" active />
      </div>
    </div>
  );
};
