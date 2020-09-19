import React from 'react';
import './TopbarOverview.scoped.scss';
import { useHistory } from 'react-router-dom';
import { Logo } from '../icons';

const TopbarOverview = () => {
  const history = useHistory();

  return (
    <div style={{ backgroundColor: '#000' }}>
      <div className="topbar-overview-container">
        <Logo className="logo" />
        <nav className="nav" role="navigation">
          <ul className="nav-list">
            <li>
              <button className="nav-button" onClick={() => history.push('/player')}>
                Player
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopbarOverview;
