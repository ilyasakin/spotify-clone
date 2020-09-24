import React from 'react';
import './Nav.scoped.scss';
import { useHistory } from 'react-router-dom';
import NavButton from '../NavButton/NavButton';
import { HomeActive, Search, Library } from '../icons';

interface Props {
  bottom?: boolean;
}

const Nav: React.FC<Props> = ({ bottom }) => {
  const history = useHistory();

  return (
    <div className={`navigation-menu ${bottom ? 'bottom-menu' : ''}`}>
      <NavButton
        Icon={HomeActive}
        text="Home"
        onClick={() => history.push('/player/home')}
        active={history.location.pathname === '/player/home'}
      />
      <NavButton
        Icon={Search}
        text="Search"
        onClick={() => history.push('/player/search')}
        active={history.location.pathname === '/player/search'}
      />
      <NavButton
        Icon={Library}
        text="Library"
        active={history.location.pathname === '/player/location'}
      />
    </div>
  );
};

export default Nav;
