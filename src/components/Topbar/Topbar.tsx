import React, { useContext } from 'react';
import './Topbar.scoped.scss';
import { useLocation } from 'react-router-dom';
import TopbarNavBtn from '../TopbarNavButton/TopbarNavButton';
import PillMenu from '../PillMenu/PillMenu';
import User from '../../context/User';
import SearchBar from '../SearchBar/SearchBar';

const Topbar: React.FC = () => {
  const { user } = useContext(User);
  const location = useLocation();

  return (
    <div className="topbar">
      <div className="nav-buttons">
        <TopbarNavBtn direction="left" />
        <TopbarNavBtn direction="right" />
      </div>
      <div className="searchbar-container">
        {location.pathname === '/player/search' && <SearchBar />}
      </div>
      <PillMenu className="user-menu" Text={user?.name || 'Unknown User'} />
    </div>
  );
};

export default Topbar;
