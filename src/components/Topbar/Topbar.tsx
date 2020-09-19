import React, { useContext } from 'react';
import './Topbar.scoped.scss';
import TopbarNavBtn from '../TopbarNavButton/TopbarNavButton';
import PillMenu from '../PillMenu/PillMenu';
import User from '../../context/User';

const Topbar: React.FC = () => {
  const { user } = useContext(User);

  return (
    <div className="topbar">
      <div className="nav-buttons">
        <TopbarNavBtn direction="left" />
        <TopbarNavBtn direction="right" />
      </div>

      <PillMenu className="user-menu" Text={user?.name || 'Unknown User'} />
    </div>
  );
};

export default Topbar;
