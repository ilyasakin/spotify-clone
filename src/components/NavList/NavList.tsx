import './NavList.scoped.scss';
import NavListItem from '../NavListItem/NavListItem';

const NavList: React.FC = () => {
  return (
    <div className="playlist-list">
      <NavListItem text="playlist placeholder" />
      <NavListItem text="playlist placeholder" />
      <NavListItem text="playlist placeholder" />
    </div>
  );
};

export default NavList;
