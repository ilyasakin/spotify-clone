import React, { useContext } from 'react';
import './Nav.scoped.scss';
import NavButton from '../NavButton/NavButton';
import { HomeActive, Search, Library } from '../icons';
import PlayerScreen from '../../context/PlayerScreen';

interface Props {
  bottom?: boolean;
}

const Nav: React.FC<Props> = ({ bottom }) => {
  const { setCurrentScreen } = useContext(PlayerScreen);
  return (
    <div className={`navigation-menu ${bottom ? 'bottom-menu' : ''}`}>
      <NavButton Icon={HomeActive} text="Home" active onClick={() => setCurrentScreen?.('Home')} />
      <NavButton Icon={Search} text="Search" onClick={() => setCurrentScreen?.('Search')} />
      <NavButton Icon={Library} text="Library" />
    </div>
  );
};

export default Nav;
