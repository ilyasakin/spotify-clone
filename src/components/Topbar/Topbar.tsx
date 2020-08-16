import React, { useContext } from 'react';
import './Topbar.scss';
import TopbarNavBtn from '../TopbarNavButton/TopbarNavButton';
import PillMenu from '../PillMenu/PillMenu';
import User from '../../context/User';

const Topbar: React.FC = () => {
  const { user } = useContext(User);

  return (
    <div className="topbar">
      <TopbarNavBtn direction="left" />
      <TopbarNavBtn direction="right" />
      <PillMenu className="user-menu" Text={user?.name || 'Unknown User'} />
    </div>
  );
};

export default Topbar;
