import React from 'react';
import './TopbarOverview.scss';
import { useHistory } from 'react-router-dom';
import { Logo } from '../icons';

const TopbarOverview = () => {
  const history = useHistory();

  return (
    <div style={{ backgroundColor: '#000' }}>
      <div className="topbar-overview-container">
        <Logo className="topbar-overview-logo" />
        <nav className="topbar-overview-nav" role="navigation">
          <ul className="topbar-overview-nav-list">
            <li>
              <button
                className="topbar-overview-nav-button"
                onClick={() => history.push('/player')}
              >
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
